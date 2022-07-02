import Head from "next/head";
import styles from "styles/pages/Home.module.scss";

import Header from "components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volts title</title>
        <meta name="description" content="Volts description" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
    </div>
  );
}
