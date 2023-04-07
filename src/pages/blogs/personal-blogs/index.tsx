import { BlogHeaderData } from '../../../types';
import { GetStaticProps, NextPage } from 'next';
import { getSortedBlogHeadersData } from '../../../lib/blogs';
import Nav from '../../../components/Nav';
import BlogBanner from '../../../components/Blog/BlogBanner';
import BlogList from '../../../components/Blog/BlogList';
import Footer from '../../../components/Footer';

interface Props {
  blogHeaders: BlogHeaderData[];
}

const getStaticProps: GetStaticProps = async () => {
  const blogHeaders: BlogHeaderData[] = await getSortedBlogHeadersData(
    'personal'
  );

  return {
    props: { blogHeaders },
  };
};

const PersonalBlogs: NextPage<Props> = ({ blogHeaders }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <BlogBanner blogType="personal" />
        <BlogList blogType="personal" blogHeaders={blogHeaders} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { getStaticProps };
export default PersonalBlogs;
