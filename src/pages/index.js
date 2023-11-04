import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import CookieConsent from "react-cookie-consent";
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <cookieBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay buttonText="Akzeptieren" style={{background: "#303846",padding:"2.5rem",fontSize:"1.2rem"}}
                      buttonStyle={{background:"#2e8555",padding:"15px 30px",color:"#fff",fontSize:"1rem"}}
      >
          Diese Webseite verwendet Cookies, um die Benutzererfahrung zu verbessern. Durch die Nutzung unserer Webseite stimmen Sie der Verwendung aller Cookies gemäß unserer Cookie-Richtlinie zu.
      </CookieConsent>
    </Layout>
  );
}
