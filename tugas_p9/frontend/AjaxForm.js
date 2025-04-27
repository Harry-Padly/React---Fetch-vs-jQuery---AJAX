// frontend/src/components/AjaxForm.js
import React, { useState } from 'react';
import $ from 'jquery';

function AjaxForm() {
  const [form, setForm] = useState({ nama: '', prodi: '' });
  const [respon, setRespon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: "http://localhost:3000/submit",
      method: "POST",
      contentType: "application/json",  // Wajib JSON
      data: JSON.stringify(form),       // Kirim dalam format JSON
      success: function (response) {
        setRespon(response.message);
      },
      error: function () {
        setRespon("Terjadi kesalahan.");
      }
    });
  };

  return (
    <div>
      <h2>Form Versi jQuery AJAX</h2>
      <form id="form-ajax" onSubmit={handleSubmit}>
        <input 
          name="nama" 
          value={form.nama}
          onChange={e => setForm({ ...form, nama: e.target.value })} 
          placeholder="Nama"
        />
        <input 
          name="prodi" 
          value={form.prodi}
          onChange={e => setForm({ ...form, prodi: e.target.value })} 
          placeholder="Prodi"
        />
        <button type="submit">Kirim</button>
      </form>
      <p>{respon}</p>
    </div>
  );
}

export default AjaxForm;
