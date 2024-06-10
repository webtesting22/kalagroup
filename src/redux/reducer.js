import { combineReducers, createStore } from "redux";

const state = {
  headerSize: 50,
  currscroll: window.scrollY,
  footerSize: 10,
};

const reducer = (initialState = state, action) => {
  switch (action.type) {
    case "SET_HEADER_SIZE":
      return { ...initialState, headerSize: action.data };
    case "on_scroll":
      return { ...initialState, currscroll: window.scrollY };
    case "SET_FOOTER_SIZE":
      return { ...initialState, footerSize: action.data };
    default:
      return initialState;
  }
};

export const store = createStore(
  combineReducers({
    app: reducer,
  })
);
