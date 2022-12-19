import "../styles/globals.scss";
import React, { useState } from "react";
import { SSRProvider } from "@react-aria/ssr";
import Header from "../src/components/Navbar";
import SidebarMenu from "../src/components/SidebarMenu";
import { Provider } from "react-redux";
import { store } from "../src/store";
import classNames from "classnames";

function MyApp({ Component, pageProps }) {
  const [isHasSidebar, setIsHasSidebar] = useState(false);

  store.subscribe(() => {
    setIsHasSidebar(store.getState().isSideBarOpen);
  });

  return (
    <SSRProvider>
      <Provider store={store}>
        <div
          className={classNames(
            "page-container",
            isHasSidebar ? "has-sidebar" : ""
          )}
        >
          <Header />
          <Component {...pageProps} />
          <SidebarMenu />
        </div>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
