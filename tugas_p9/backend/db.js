// backend/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",     // ganti jika password MySQL kamu beda
  database: "db_mahasiswa"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Koneksi ke database berhasil");
});

module.exports = db;
