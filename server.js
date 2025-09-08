const express = require("express");
const app = express();
const PORT = 8080;

const menu = [
  { id: 1, item: "Biriyani", price: 150 },
  { id: 2, item: "Pizza", price: 250 },
  { id: 3, item: "Burger", price: 120 },
  { id: 4, item: "Dosa", price: 80 }
];

app.get("/", (req, res) => {
  res.send("Welcome to Swiggy Demo App 🚀");
});

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`Swiggy app running on http://localhost:${PORT}`);
});

