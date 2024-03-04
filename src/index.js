const express = require('express');
const multer = require('multer');
const { compressImages } = require('imgecompress');
const path = require('path');

const app = express();
const port = 3000;

// Multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static('public'));

// POST endpoint to upload and compress images
app.post('/upload', upload.array('images'), async (req, res) => {
  try {
    // Compress uploaded images
    await compressImages('./uploads', './compressed_images');

    res.send('Images compressed successfully!');
  } catch (error) {
    console.error('Error compressing images:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
