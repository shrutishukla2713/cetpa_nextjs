import Products from "../../models/products";
import connectDb from "../../middleware/mongoose";
//connection with database pending
// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }

//GET Call to fetch some data
//http://localhost:3000/api/getProducts
const handler = async (req, res) => {
  const data = await Products.find();
  res.status(200).json(data);
}

export default connectDb(handler);