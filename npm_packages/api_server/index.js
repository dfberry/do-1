import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = '1.0.0';

// Disable the 'X-Powered-By' header
app.disable('x-powered-by');

app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    version: VERSION
  });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
