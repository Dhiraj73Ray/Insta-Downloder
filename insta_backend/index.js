const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Main download endpoint
app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  console.log('Received URL:', url);

  // TEMPORARY: return dummy data (we'll replace this with real scraping later)
  res.json({
    success: true,
    mediaUrl: 'https://example.com/dummy-video.mp4',
    thumbnail: 'https://example.com/dummy-thumbnail.jpg',
    caption: 'This is a dummy caption for now.',
    likes: 1234,
    comments: 56,
    shares: 78,
    message: 'Backend received your URL! Real scraping coming next.'
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});