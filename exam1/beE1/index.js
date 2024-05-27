import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("not connected!"));

const ourMenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const OurMenu = mongoose.model("OurMenu", ourMenuSchema);

app.get("/ourmenu", async (req, res) => {
  const getAllMenu = await OurMenu.find();
  res.send(getAllMenu);
});

app.get("/ourmenu/:id", async (req, res) => {
  let { id } = req.params;
  const getMenu = await OurMenu.findById(id);
  res.send(getMenu);
});

app.post("/ourmenu", async (req, res) => {
  const obj = req.body;
  const postMenu = new OurMenu(obj);
  await postMenu.save();
  res.send(postMenu);
});

app.delete("/ourmenu/:id", async (req, res) => {
  let { id } = req.params;
  const deleteMenu = await OurMenu.findByIdAndDelete(id);

  res.send(deleteMenu);
});

app.put("/ourmenu/:id", async (req, res) => {
  let { id } = req.params;
  const obj = req.body;
  const putMenu = await OurMenu.findByIdAndUpdate(id, obj);
  res.send(putMenu);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
