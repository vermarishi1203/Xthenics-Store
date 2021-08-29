import { useCart } from "../contexts/cartContext";

export const Cart = () => {
  const { state, dispatch: cartDispatch } = useCart();
  return (
    <section className="cart">
      <h1>Cart: {state.cart.length}</h1>
      <ul>
        {state.cart.map((product) => (
          <li className="product-card" key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>Rs. {product.price}</p>
            {product.inStock ? <p>Available</p> : <p>Out of Stock</p>}
            {product.fastDelivery ? (
              <p>Fast Delivery</p>
            ) : (
              <p>Minimum 5 days required</p>
            )}
            <p>
              Quantity: <button disabled={product.quantity === 1? true: false} onClick={()=> cartDispatch({type: "DECREASE_QUANTITY", payload: product})}>-</button>{" "}
              <span>{product.quantity}</span>
              {" "}
              <button onClick={()=> cartDispatch({type: "INCREASE_QUANTITY", payload: product})}>+</button>
            </p>
            <button
              onClick={() =>
                cartDispatch({ type: "MOVE_TO_WISHLIST", payload: product })
              }
            >
              Move to Wish List
            </button>
            <button
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <section>
        <h1>Price Details:</h1>
        
      </section>
    </section>
  );
};
