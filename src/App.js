import {  useState } from "react";
import "./styles.css";
import { useCart } from "./contexts/cartContext";
import { Cart, Home, Products, Profile, WishList } from "./pages/index";

export default function App() {
  const [route, setRoute] = useState("home");
  return (
    <div className="App">
      <header className="header">
        <p onClick={() => setRoute("home")} className="name">
          Xthenics Store
        </p>
        <nav className="nav">
          <button onClick={() => setRoute("wishList")} className="nav__links">
            <i className="fas fa-heart"></i>
            <span className="nav__links__text">Wish List</span>
          </button>
          <button onClick={() => setRoute("cart")} className="nav__links">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav__links__text">Cart</span>
          </button>
          <button onClick={() => setRoute("profile")} className="nav__links">
            <i className="fas fa-user-circle"></i>
            <span className="nav__links__text">Profile</span>
          </button>
        </nav>
      </header>
      <main>
        {route === "home" && <Home />}
        {route === "wishList" && <WishList />}
        {route === "cart" && <Cart />}
        {route === "profile" && <Profile />}
      </main>
    </div>
  );
}
