import "../styles/globals.scss";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import Header from "../src/components/Navbar";
import SidebarMenu from "../src/components/SidebarMenu";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <div className="page-container">
        <Header />
        <Component {...pageProps} />
        <SidebarMenu />
      </div>
    </SSRProvider>
  );
}

export default MyApp;
