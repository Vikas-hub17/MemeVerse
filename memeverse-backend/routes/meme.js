const express = require('express');
const Meme = require('../models/Meme');
const router = express.Router();

// Fetch top 10 memes by likes
router.get('/leaderboard', async (req, res) => {
  try {
    const topMemes = await Meme.find().sort({ likes: -1 }).limit(10);
    res.json(topMemes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
