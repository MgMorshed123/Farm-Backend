// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';

// Create Express app
const app = express();


const mongoUri = 

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});






// Define a route
app.get('/', (req, res) => {
     res.send("hello")
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
