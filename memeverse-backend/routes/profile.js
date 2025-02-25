const express = require('express');
const User = require('../models/User');
const Meme = require('../models/Meme');
const router = express.Router();

// Get user profile by ID
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('likedMemes');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user profile' });
  }
});

// Update user profile
router.put('/:userId', async (req, res) => {
  try {
    const { name, bio, profilePicture } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { name, bio, profilePicture },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user profile' });
  }
});

// Get user-uploaded memes
router.get('/:userId/memes', async (req, res) => {
  try {
    const memes = await Meme.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(memes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch uploaded memes' });
  }
});

module.exports = router;
