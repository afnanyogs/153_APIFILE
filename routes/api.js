// routes/api.js

const express = require('express');
const router = express.Router(); // Membuat objek Router Express

// Definisikan rute Anda di sini:

// Contoh Rute 1: GET /api/v1/status
router.get('/status', (req, res) => {
  res.status(200).json({ 
      success: true, 
      message: 'API v1 aktif dan berjalan!' 
  });
});

// Contoh Rute 2: POST /api/v1/data
router.post('/data', (req, res) => {
    // Data yang dikirim dari body request
    const receivedData = req.body; 
    res.status(201).json({
        success: true,
        message: 'Data diterima!',
        data: receivedData
    });
});

// PENTING: Ekspor (Export) objek router agar index.js bisa menggunakannya
module.exports = router;