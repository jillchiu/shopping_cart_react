import { createStore } from "redux";

// 定義 reducer
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

// 創建 store
const store = createStore(cartReducer);

export default store;
