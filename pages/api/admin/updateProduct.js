require("dotenv").config();

export default async (req, res) => {
  const { id, name, amount, img1, img2, description, stock } = req.body;
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const product = await stripe.products.update(id, {
      name,
      images: [img1, img2],
      metadata: { description, stock },
    });
    const price = await stripe.prices.create({
      unit_amount: amount * 100,
      currency: "aud",
      product: id,
    });
    console.log(price);
    return res.json({ message: product });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
