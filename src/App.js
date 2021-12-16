import "./App.css";
import { MonsterList, MonsterPage } from "./components/";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<div>welcome to monster app</div>} />
            <Route path="monster" element={<MonsterList />}>
              <Route path=":monsterID" element={<MonsterPage />} />
            </Route>
          </Route>
          <Route path="about" element={<div>About page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/monster">All Monsters</Link>
        </li>
      </ul>
      <Outlet />
      <div className="mt-5">This is Footer</div>
    </Container>
  );
};

export default App;
