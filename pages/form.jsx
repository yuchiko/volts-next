import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import FormConsumption from "components/FormConsumption";

// TODO: import to global ?
import styles from "styles/pages/Home.module.scss";

export default function FormPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volts form</title>
        <meta name="description" content="Volts description" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <div className="body-content fcons-page">
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell">
              <h2 className="fcons-page__title">Форма на планові обсяги споживання електричної енергії</h2>
              <FormConsumption />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

