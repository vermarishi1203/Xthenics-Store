import { useState } from "react";
import "./styles.css";
import { useCart } from "./contexts/cartContext";
import { Cart, Home, Products, Profile, WishList } from "./pages/index";

export default function App() {
  const [route, setRoute] = useState("home");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { state } = useCart();
  return (
    <div className="App">
      <header className="header">
        <p onClick={() => setRoute("home")} className="name">
          Xthenics Store
        </p>
        <nav className="nav">
          <button onClick={() => setRoute("wishList")} className="nav__links">
            <i className="fas fa-heart header__icon">
              <span className="icon-badge">{state.wishList.length}</span>
            </i>
            <span className="nav__links__text"> Wish List</span>
          </button>
          <button onClick={() => setRoute("cart")} className="nav__links">
            <i className="fas fa-shopping-cart header__icon">
              <span className="icon-badge">{state.cart.length}</span>
            </i>
            <span className="nav__links__text"> Cart</span>
          </button>
          <button
            onClick={() => setIsHamburgerOpen(true)}
            className="nav__links"
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>
      <nav
        className={isHamburgerOpen ? "hamburger--open" : "hamburger--closed"}
      >
        <button
          onClick={() => {
            setRoute("home");
            setIsHamburgerOpen(false);
          }}
          className="nav__links "
        >
          <i className="fas fa-home"></i>
          <span> Home</span>
        </button>
        <button
          onClick={() => {
            setRoute("products");
            setIsHamburgerOpen(false);
          }}
          className="nav__links "
        >
          <i className="fas fa-cubes"></i>
          <span> Products</span>
        </button>
        <button
          onClick={() => {
            setRoute("wishList");
            setIsHamburgerOpen(false);
          }}
          className="nav__links"
        >
          <i className="fas fa-heart "></i>
          <span> Wish List</span>
        </button>
        <button
          onClick={() => {
            setRoute("cart");
            setIsHamburgerOpen(false);
          }}
          className="nav__links"
        >
          <i className="fas fa-shopping-cart "></i>
          <span> Cart</span>
        </button>
        <button
          onClick={() => {
            setRoute("profile");
            setIsHamburgerOpen(false);
          }}
          className="nav__links"
        >
          <i className="fas fa-user-circle"></i>
          <span> Profile</span>
        </button>
      </nav>
      <div
        onClick={() => setIsHamburgerOpen(false)}
        className={isHamburgerOpen ? "overlay--open" : "overlay--closed"}
      ></div>
      <main>
        {route === "home" && <Home />}
        {route === "products" && <Products />}
        {route === "wishList" && <WishList />}
        {route === "cart" && <Cart />}
        {route === "profile" && <Profile />}
      </main>
    </div>
  );
}
