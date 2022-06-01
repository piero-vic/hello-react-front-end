import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/hello" element={<h1>Hello Path</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
