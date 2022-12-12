import "../styles/globals.scss";
import { SSRProvider } from "@react-aria/ssr";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
