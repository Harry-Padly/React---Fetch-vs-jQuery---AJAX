// backend/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ini sudah cukup, tidak perlu body-parser lagi

// Route POST /submit
app.post("/submit", (req, res) => {
  const { nama, prodi } = req.body;

  // Validasi data sederhana
  if (!nama || !prodi) {
    return res.status(400).json({ error: "Nama dan Prodi wajib diisi." });
  }

  const sql = "INSERT INTO mahasiswa (nama, prodi) VALUES (?, ?)";
  db.query(sql, [nama, prodi], (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ error: "Gagal menyimpan data." });
    }
    res.json({ message: `Halo ${nama}, prodi kamu adalah ${prodi}.` });
  });
});

// Jalankan server
app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
