import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DadJokes from "./components/DadJokes";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dadjokes" element={<DadJokes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
