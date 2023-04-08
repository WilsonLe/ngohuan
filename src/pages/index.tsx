import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import BlogTypes from '../components/Home/BlogTypes';
import PubTypes from '../components/Home/PubTypes';
import Nav from '../components/Nav';
import { FooterData } from '../models/footer';
import { HeaderData } from '../models/header';
import { HomeData } from '../models/home';
import { Utils } from '../utils';

interface HomeProps {
  header: HeaderData;
  main: HomeData;
  footer: FooterData;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [header, main, footer] = await Promise.all([
    Utils.fetchHeader(),
    Utils.fetchHome(),
    Utils.fetchFooter(),
  ]);
  return {
    props: {
      header,
      main,
      footer,
    },
  };
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Head>
        <title>{props.main.title}</title>
        <meta name="description" content={props.main.description} />
        <link rel="icon" href={props.main.favicon.src} />
      </Head>
      <nav>
        <Nav {...props.header} />
      </nav>
      <main>
        <Banner {...props.main} />
        <BlogTypes {...props.main} />
        <PubTypes {...props.main} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
