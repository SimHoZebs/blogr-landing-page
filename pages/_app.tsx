import "windi.css";
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Frontend Mentor | [Blogr]</title>
      <Component {...pageProps} />;
    </>
  );
}
