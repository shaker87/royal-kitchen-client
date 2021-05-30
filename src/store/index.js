import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from '../store/reducers/rootReducer'

const configureStore = () => {
  return createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
export default configureStore;