import { useCart } from "../contexts/cartContext";

export const Products = () => {
  const { state, dispatch: productDispatch } = useCart();
  return (
    <>
      {" "}
      <ul className="product-list">
        {state.data.map((product) => (
          <li className="product-card" key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>Rs. {product.price}</p>
            <button
              onClick={() =>
                productDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                productDispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
            >
              Add to Wish List
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
