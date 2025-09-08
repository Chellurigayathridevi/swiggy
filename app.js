const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

// Demo menu items
let menu = [
  { id: 1, item: "Biriyani", price: 150 },
  { id: 2, item: "Pizza", price: 250 },
  { id: 3, item: "Burger", price: 120 },
  { id: 4, item: "Dosa", price: 80 }
];

// Orders will be stored in memory (for demo)
let orders = [];

app.get("/", (req, res) => {
  res.send("🚀 Welcome to Swiggy Demo App");
});

// Get menu
app.get("/menu", (req, res) => {
  res.json(menu);
});

// Place order
app.post("/order", (req, res) => {
  const { itemId, qty } = req.body;
  const food = menu.find(m => m.id === itemId);

  if (!food) {
    return res.status(404).json({ error: "Item not found" });
  }

  const order = {
    orderId: orders.length + 1,
    item: food.item,
    qty,
    total: food.price * qty
  };

  orders.push(order);
  res.json({ message: "Order placed successfully!", order });
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Swiggy app running on http://localhost:${PORT}`);
});

