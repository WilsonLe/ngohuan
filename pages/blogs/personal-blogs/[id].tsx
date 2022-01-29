import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PersonalBlogBanner from '../../../components/Blog/Banner/PersonalBlogBanner';
import PersonalBlogList from '../../../components/Blog/BlogList/PersonalBlogList';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import { getAllBlogIds, getBlogData } from '../../../lib/blogs';
import { BlogData } from '../../../types';

interface Props {
  blogData: BlogData | null;
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getBlogData(params?.id as string);
  return {
    props: { blogData },
  };
};

const PersonalBlog: NextPage<Props> = ({ blogData }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        {blogData !== null ? (
          <>
            <h1>{blogData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogData.htmlContent }} />
          </>
        ) : (
          <>
            <h1>invalid blog data, please check your markdown file</h1>
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { getStaticPaths, getStaticProps };
export default PersonalBlog;
