import "../styles/globals.scss";
import { SSRProvider } from "@react-aria/ssr";
import HeaderNavbar from "../src/components/HeaderNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <HeaderNavbar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
