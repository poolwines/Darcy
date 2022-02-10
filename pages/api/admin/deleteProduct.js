require("dotenv").config();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const product = await stripe.products.update(id, { active: false });
    return res.json({ message: deleted });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
