import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { useEffect } from "react";
import { dispatch, store } from "../redux/store";
// import { wrapper } from "../store/store";

// initApiService(store);
const App = ({ Component, pageProps }) => {
  useEffect(() => {}, [dispatch]);
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
};
export default App;
