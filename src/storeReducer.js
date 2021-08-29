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
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
      case "SORT": 
      return {
        ...state, 
        sortBy: action.payload
      }
      case "TOGGLE_INVENTORY": 
      return {
        ...state, 
        showInventoryAll: !state.showInventoryAll
      }
      case "TOGGLE_DELIVERY": 
      return {
        ...state, 
        showFastDeliveryOnly: !state.showFastDeliveryOnly
      }
      case "PRICE_RANGE":
        return {
          ...state,
          priceRange: action.payload
        }
    default:
      return state;
  }
};
