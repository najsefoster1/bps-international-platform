const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (for demonstration only)
// const facilities = [];;
const facilities = require('./facilities');
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

// 
const PER_PICTURE_PRICE = 0.5;
const creditPacks = [
  { id: 'pack20', credits: 20, price: 10 },
  { id: 'pack50', credits: 50, price: 20 },
  { id: 'pack120', credits: 120, price: 45 }
];

// Create payment intent (dummy)
app.post('/api/payments/create-intent', (req, res) => {
  const { paymentOption, creditsNeeded, photosLength } = req.body;
  let amount = 0;
  if (paymentOption === 'credits') {
    const pack = creditPacks.find(p => p.credits >= creditsNeeded) || creditPacks[creditPacks.length - 1];
    amount = pack.price * 100;
  } else {
    amount = photosLength * PER_PICTURE_PRICE * 100;
  }
  res.json({ clientSecret: 'test_client_secret', amount });
});

// Confirm payment (dummy)
app.post('/api/payments/confirm', (req, res) => {
  const { userId, paymentIntentId, paymentOption, creditsNeeded } = req.body;
  res.json({ success: true });
});
Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
