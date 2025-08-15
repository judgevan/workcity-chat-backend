const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ===== Models =====
const ConversationSchema = new mongoose.Schema({
  title: String,
});
const Conversation = mongoose.model('Conversation', ConversationSchema);

const MessageSchema = new mongoose.Schema({
  conversationId: mongoose.Schema.Types.ObjectId,
  sender: String,
  text: String,
});
const Message = mongoose.model('Message', MessageSchema);

// ===== Routes =====

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all conversations
app.get('/api/conversations', async (req, res) => {
  const conversations = await Conversation.find();
  res.json(conversations);
});

// Get messages for a conversation
app.get('/api/messages/:conversationId', async (req, res) => {
  const messages = await Message.find({ conversationId: req.params.conversationId });
  res.json(messages);
});

// Add a message
app.post('/api/messages', async (req, res) => {
  const { conversationId, sender, text } = req.body;
  const message = new Message({ conversationId, sender, text });
  await message.save();
  res.json(message);
});

// Create a new conversation (for testing)
app.post('/api/conversations', async (req, res) => {
  const conversation = new Conversation({ title: req.body.title });
  await conversation.save();
  res.json(conversation);
});

// ===== Start Server =====
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
