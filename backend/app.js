const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/fashionfit', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Define Mongoose Schemas
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const wardrobeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clothes: [{ type: String }], // You might want to extend this schema based on your requirements
});

const choiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  outfit: { type: String }, // Example: Casual, Formal, Sporty, etc.
  date: { type: Date, default: Date.now },
});

// Create Mongoose Models
const User = mongoose.model('User', userSchema);
const Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);
const Choice = mongoose.model('Choice', choiceSchema);

// Express Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// File Upload Endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  return res.status(200).json({ message: 'File uploaded successfully.', filename: file.filename });
});

// User Registration Endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Sample Endpoint to Get User's Wardrobe
app.get('/wardrobe/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const wardrobe = await Wardrobe.findOne({ userId });
    if (!wardrobe) {
      return res.status(404).json({ message: 'Wardrobe not found.' });
    }

    return res.status(200).json(wardrobe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Sample Endpoint to Add Choice
app.post('/choice', async (req, res) => {
  const { userId, outfit } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Create a new choice
    const newChoice = new Choice({ userId, outfit });
    await newChoice.save();

    return res.status(201).json({ message: 'Choice added successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
// require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// require("./db");
const multer = require('multer')

const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { response } = require('express')
const { stringify } = require('querystring')
const { resolve } = require('path')
const { rejects } = require('assert')
const { resolveSoa } = require('dns')
const { resolve4 } = require('dns')
const { resolve6 } = require('dns')
const { resolveCname } = require('dns')
const { resolveNs } = require('dns')
const { resolveTxt } = require('dns')
const { resolveMx } = require('dns')
const { resolveSrv } = require('dns')
const { resolvePtr } = require('dns')
const { resolveNaptr } = require('dns')
const { resolveCaa } = require('dns')
const { resolveAny } = require('dns')
const { resolveSoa } = require('dns')

app.use(express.json())
app.use(bodyParser.json());

app.use(cors()) 
*/