import Head from "next/head";
import { useEffect, useState } from "react";
import "swiper/css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <VideoState>
      <Head>
        <title>eTreeks - Education & Courses Landing Page Template</title>
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      {loader && <PreLoader />}
      <div className="wsmenucontainer">
        <Component {...pageProps} />
      </div>
    </VideoState>
  );
}

export default MyApp;
