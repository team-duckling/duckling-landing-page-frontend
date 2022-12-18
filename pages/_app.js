import "../styles/globals.scss";
import React, { useEffect, useRef, useState } from "react";
import { SSRProvider } from "@react-aria/ssr";
import Header from "../src/components/Navbar";
import SidebarMenu from "../src/components/SidebarMenu";

function MyApp({ Component, pageProps }) {
  const sidebarRef = useRef();

  return (
    <SSRProvider>
      <div className="page-container">
        <Header ref={sidebarRef} />
        <Component {...pageProps} />
        <SidebarMenu />
      </div>
    </SSRProvider>
  );
}

export default MyApp;
