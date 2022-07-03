import Head from "next/head";
import styles from "styles/pages/Home.module.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import WelcomeSection from "components/WelcomeSection";
import AboutSection from "components/AboutSection";
import AdvantagesSection from "components/AdvantagesSection";
import PartnersSection from "components/PartnersSection";
import ServicesSection from "components/ServicesSection";
import PersonSection from "components/PersonSection";
import MainFormSection from "components/MainFormSection";
import NewsSection from "components/NewsSection";

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
      <WelcomeSection />
      <AboutSection />
      <AdvantagesSection />
      <PartnersSection />
      <ServicesSection />
      <PersonSection />
      <MainFormSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
