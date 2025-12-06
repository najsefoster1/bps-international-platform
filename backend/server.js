const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (for demonstration only)
const facilities = [];
const orders = [];
const users = [];

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Facilities search
app.get('/api/facilities', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const result = facilities.filter(f => f.name.toLowerCase().includes(q));
  res.json(result);
});

// Create order
app.post('/api/orders', (req, res) => {
  const { userId, photos, recipient } = req.body;
  const order = { id: uuidv4(), userId, photos, recipient, status: 'received' };
  orders.push(order);
  res.status(201).json(order);
});

// Get order
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Not found' });
  res.json(order);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
