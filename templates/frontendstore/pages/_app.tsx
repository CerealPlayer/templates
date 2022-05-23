import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { CartContextProvider } from "../context/cart-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Head>
        <title>Front-end Store | An e-commerce demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="This is a template that I personally use to learn and as a reference. It is supposed to be a complete e-commerce website, with all the integrations that something like that requires."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
