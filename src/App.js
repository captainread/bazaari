import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basket from "./components/Basket";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Item from "./components/Item";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import { UserContext } from "./components/contexts";
import logo from "./assets/bazaari.png";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter basename={"/bazaari"}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <header>
            <img className="header-logo" src={logo} alt="Bazaari logo" />
          </header>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/items" element={<Home />} />
            <Route path="/api/categories" element={<Categories />} />
            <Route path="/api/items/:item_id" element={<Item />} />
            <Route path="/api/users" element={<SignIn />} />
            <Route path="/api/users/:username/basket" element={<Basket />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
