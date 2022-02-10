import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
         Pool Wines
        </title>
        <meta
          name="description"
          content="We are Poolwines"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <main style={{backgroundColor: '#FAF5EB'}} className="flex-grow">
            <Component {...pageProps} />
          </main>
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
