import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5001; // Must match frontend fetch port!

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mindleapDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  address: String,
  feedback: String
});

const Contact = mongoose.model('Contact', contactSchema);

// API Route
app.post('/contact', async (req, res) => {
  const { name, contactNumber = '', address = '', feedback } = req.body;
  try {
    const newContact = new Contact({ name, contactNumber, address, feedback });
    await newContact.save();
    res.status(201).json({ message: 'Feedback saved successfully!' });
  } catch (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
