import "../styles/globals.scss";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import Header from "../src/components/Navbar";
import SidebarMenu from "../src/components/SidebarMenu";
import { Provider } from "react-redux";
import { store } from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <div className="page-container">
          <Header />
          <Component {...pageProps} />
          <SidebarMenu />
        </div>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
