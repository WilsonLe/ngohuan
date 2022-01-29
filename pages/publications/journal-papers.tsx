import { GetStaticProps, NextPage } from 'next';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import config from '../../config';
import { getPubsData } from '../../lib/pubs';

interface Props {
  pubsData: string;
}

const getStaticProps: GetStaticProps = async () => {
  const pubsData = await getPubsData('journal');
  console.log(pubsData);

  return {
    props: { pubsData },
  };
};

const JournalPapers: NextPage<Props> = ({ pubsData }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="w-full">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="pb-5 border-b border-gray-200">
            <h1 className="text-3xl leading-6 font-bold text-gray-900">
              {config.journalPapers.title}
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: pubsData }}
            className="list-decimal"
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export { getStaticProps };
export default JournalPapers;
