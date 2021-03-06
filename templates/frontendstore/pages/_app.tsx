import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { CartContextProvider } from "../context/cart-context";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
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
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </SessionProvider>
    </CartContextProvider>
  );
}

export default MyApp;
