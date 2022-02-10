require("dotenv").config();

export default async (req, res) => {
  const { name, amount, img1, img2, description, stock } = req.body;
  try {
    console.log("Amount : " + amount + " ");
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const product = await stripe.products.create({
      name,
      images: [img1, img2],
      metadata: { stock, description },
    });
    console.log(product);
    const price = await stripe.prices.create({
      unit_amount: amount * 100,
      currency: "aud",
      product: product.id,
    });
    console.log(price);
    return res.json({ message: product });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
