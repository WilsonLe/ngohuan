import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import BlogBanner from '../../../components/Blog/BlogBanner';
import BlogList from '../../../components/Blog/BlogList';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import { getSortedBlogHeadersData } from '../../../lib/blogs';
import { BlogHeaderData } from '../../../types';

interface Props {
  blogHeaders: BlogHeaderData[];
}

const getStaticProps: GetStaticProps = async () => {
  const blogHeaders: BlogHeaderData[] = await getSortedBlogHeadersData(
    'research'
  );
  return {
    props: { blogHeaders },
  };
};

const ResearchBlog: NextPage<Props> = ({ blogHeaders }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <BlogBanner blogType="research" />
        <BlogList blogType="research" blogHeaders={blogHeaders} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { getStaticProps };
export default ResearchBlog;
