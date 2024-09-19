// JavaScript source code
import express from "express";
import "./env.mjs";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
{
   console.log(`Running on port ${PORT} 🤩🤩😘`);
});