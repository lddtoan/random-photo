import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const ImageView = React.lazy(() => import("./components/image-view"));

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ImageView />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
