export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.includes(action.payload)
          ? state.cart
          : state.cart.concat(action.payload),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.includes(action.payload)
          ? state.wishList
          : state.wishList.concat(action.payload),
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.includes(action.payload)
          ? state.cart
          : state.cart.concat(action.payload),
        wishList: state.wishList.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.includes(action.payload)
          ? state.wishList
          : state.wishList.concat(action.payload),
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
