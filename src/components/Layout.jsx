import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="root site-wrap">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main tabIndex="-1" id="main-content">
        {children}
      </main>
      <footer role="contentinfo" className="site-foot">
        <div className="wrapper">
          <p>
						&copy; Digital Student Portfolio – Jan Carlo Hendriks.
          </p>
        </div>
      </footer>
    </div>
  );
}
