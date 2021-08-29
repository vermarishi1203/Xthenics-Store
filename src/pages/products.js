import { useCart } from "../contexts/cartContext";

export const Products = () => {
  const { state, dispatch: productDispatch } = useCart();
  const getSortedData = (productList, sortBy) => {
    switch (sortBy) {
      case "PRICE_LOW_TO_HIGH":
        return productList.sort((a, b) => a.price - b.price);

      case "PRICE_HIGH_TO_LOW":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  };
  const getFilteredData = (
    productList,
    showInventoryAll,
    showFastDeliveryOnly,
    priceRange
  ) => {
    return productList
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ price }) => price <= priceRange);
  };
  const sortedData = getSortedData(state.data, state.sortBy);
  const filteredData = getFilteredData(
    sortedData,
    state.showInventoryAll,
    state.showFastDeliveryOnly,
    state.priceRange
  );
  return (
    <section className="products">
      <h1>Products</h1>
      <fieldset>
        <legend>Sort</legend>
        <label>
          <input
            type="radio"
            name="sortByPrice"
            onClick={() =>
              productDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={state.sortBy && state.sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>
          Price-Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sortByPrice"
            onClick={() =>
              productDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={state.sortBy && state.sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>
          Price-High to Low
        </label>
      </fieldset>
      <fieldset>
        <legend>Filter</legend>
        <label>
          <input
            type="checkbox"
            onClick={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
            checked={state.showInventoryAll}
          ></input>
          Include out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            onClick={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
            checked={state.showFastDeliveryOnly}
          ></input>
          Fast Delivery Only
        </label>
        <br />
        <label>
          Price Range
          <input
            type="range"
            onChange={(event) =>
              productDispatch({
                type: "PRICE_RANGE",
                payload: parseInt(event.target.value),
              })
            }
            value={state.priceRange}
            min={0}
            max={1000}
            step={100}
          ></input>
          0-{state.priceRange}
        </label>
      </fieldset>
      <ul className="product-list">
        {filteredData.map((product) => (
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
    </section>
  );
};
