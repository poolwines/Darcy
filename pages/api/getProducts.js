require("dotenv").config();

export default async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "https://frontendname.netlify.app/");
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list({});
  // const res2 = await res1.json();
  const res2 = await products;

  const res4 = [];
  const price = await stripe.prices.list({});
  res4.push(price.data);

  const tableData2 = [];
  const visited = {};
  const visited2 = {};

  res2.data.map(async (data, index) => {
    data.active === true
      ? await tableData2.push({
          id: res4[0]
            .map((data2, index) => {
              if (data2.product == data.id && !visited[data2.product]) {
                visited[data2.product] = 1;
                return data2.id;
              }
            })
            .filter(Boolean)[0],
          name: data.name,
          price: res4[0]
            .map((data2, index) => {
              if (data2.product == data.id && !visited2[data2.product]) {
                visited2[data2.product] = 1;
                return data2.unit_amount;
              }
            })
            .filter(Boolean)[0],
          image: data.images[0],
          image2: data.images[1],
          description: data.metadata.description,
          stock: data.metadata.stock,
          rating: {
            count: 85,
            rate: 4.5,
          },
          currency: "AUD",
        })
      : null;
  });
  res.json({ products: tableData2 });
};
