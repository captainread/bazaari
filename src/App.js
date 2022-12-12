import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/contexts";

import logo from "./assets/bazaari.png";
import Home from "./components/Home";
import Item from "./components/Item";
import SignIn from "./components/SignIn";
import Basket from "./components/Basket";
import Categories from "./components/Categories";
import Nav from "./components/Nav";

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
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
            {/* <Route path="/api/items/:category_name" element={<ItemGrid />} /> */}
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
