import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import BlogTypes from '../components/Home/BlogTypes';
import PubTypes from '../components/Home/PubTypes';
import Nav from '../components/Nav';
import config from '../config';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.homePage.title}</title>
        <meta name="description" content={config.homePage.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Nav />
      </nav>
      <main>
        <Banner />
        <BlogTypes />
        <PubTypes />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
