const express = require('express');
const Meme = require('../models/Meme');
const router = express.Router();

// Add a comment to a meme
router.post('/:memeId', async (req, res) => {
  try {
    const { userId, text } = req.body;
    const comment = { userId, text, timestamp: new Date() };

    const updatedMeme = await Meme.findByIdAndUpdate(
      req.params.memeId,
      { $push: { comments: comment } },
      { new: true }
    );
    res.json(updatedMeme);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment' });
  }
});

// Delete a comment from a meme
router.delete('/:memeId/:commentIndex', async (req, res) => {
  try {
    const { memeId, commentIndex } = req.params;

    const meme = await Meme.findById(memeId);
    if (!meme) return res.status(404).json({ message: 'Meme not found' });

    meme.comments.splice(commentIndex, 1);
    await meme.save();

    res.json(meme);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comment' });
  }
});

module.exports = router;
