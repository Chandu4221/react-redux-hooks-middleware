import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pixabayMiddleware from "../middleware/pixabayMiddleware";
import rootReducer from "../reducers";
// TO SEE THE STORE IN THE REDUX DEV TOOLS WE NEED `redux-devtools-extension`

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(pixabayMiddleware))
  // other store enhancers if any
);

export default store;
