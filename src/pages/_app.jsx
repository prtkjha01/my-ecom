import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ReduxProvider>
    </SessionProvider>
  );
};
export default App;
