// frontend/src/App.js
import React from 'react';
import FetchForm from './components/FetchForm';
import AjaxForm from './components/AjaxForm';

function App() {
  return (
    <div>
      <FetchForm />
      <hr />
      <AjaxForm />
    </div>
  );
}

export default App;
