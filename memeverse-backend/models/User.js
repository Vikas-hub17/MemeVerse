const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  bio: { type: String, default: 'Hello! I love memes.' },
  likedMemes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meme' }],
});

module.exports = mongoose.model('User', UserSchema);
