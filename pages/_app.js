import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js"
        type="text/javascript"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.js"
        type="text/javascript"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
