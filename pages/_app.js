import "../styles/globals.css";
import "../styles/Home.module.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-white ">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
