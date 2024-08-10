import "dotenv/config";
import express from "express";

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server is runing on ${port} port`);
});
