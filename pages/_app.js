import "../styles/globals.scss";
import { SSRProvider } from "@react-aria/ssr";
import Header from "../src/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
