import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { CartContextProvider } from "../context/cart-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
