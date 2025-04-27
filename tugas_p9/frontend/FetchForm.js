// frontend/src/components/FetchForm.js
import React, { useState } from 'react';

function FetchForm() {
  const [form, setForm] = useState({ nama: '', prodi: '' });
  const [respon, setRespon] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setRespon(data.message);
  };

  return (
    <div>
      <h2>Form Versi Fetch</h2>
      <form onSubmit={handleSubmit}>
        <input name="nama" onChange={e => setForm({ ...form, nama: e.target.value })} />
        <input name="prodi" onChange={e => setForm({ ...form, prodi: e.target.value })} />
        <button type="submit">Kirim</button>
      </form>
      <p>{respon}</p>
    </div>
  );
}

export default FetchForm;
