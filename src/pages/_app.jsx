import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";

import { useRouter } from "next/router";
import { dispatch, store } from "../redux/store";
// import store from "../store";
// import { wrapper } from "../store/store";

// initApiService(store);
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["auth_token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(store.getState());
  // const handleAuth = () => {
  //   let test = store.getState().auth.user.token;
  //   console.log("test", test);
  //   store.getState().auth.user.token
  //     ? setCookie("auth_token", store.getState().auth.user.token)
  //     : setCookie("auth_token", null);
  //   console.log("cookies", cookies.auth_token);
  // };

  // console.log("cookies =>", cookies);

  const checkLogin = () => {
    // if (!cookies.auth_token) {
    //   router.push("/login");
    // }
  };
  useEffect(() => {
    // handleAuth();
    setIsLoggedIn();
    checkLogin();
    // handleAuth();
    // console.log(store.getState().auth);
    // store.getState().auth.user.token
    //   ? setCookie("auth_token", store.getState().auth.user.token, { path: "/" })
    //   : setCookie("auth_token", null);
  }, []);
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
};
export default App;
