import { useCart } from "../contexts/cartContext";

export const WishList = () => {
  const { state, dispatch: wishListDispatch } = useCart();
  return (
    <section className="wish-list">
      <h1>Wish List: {state.wishList.length}</h1>
      <ul>
        {state.wishList.map((product) => (
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
            <button
              onClick={() =>
                wishListDispatch({ type: "MOVE_TO_CART", payload: product })
              }
            >
              Move to Cart
            </button>
            <button
              onClick={() =>
                wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
              }
            >
              Remove from Wish List
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};;