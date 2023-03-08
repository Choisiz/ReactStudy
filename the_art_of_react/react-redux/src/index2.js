import { createStore } from "redux";
import rootReducer from "./module";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App2 />
  </Provider>
);
