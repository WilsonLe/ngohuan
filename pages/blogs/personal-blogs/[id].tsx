import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PersonalBlogBanner from '../../../components/Blog/Banner/PersonalBlogBanner';
import PersonalBlogList from '../../../components/Blog/BlogList/PersonalBlogList';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import { getAllPostIds } from '../../../lib/blogs';
import { PostData } from '../../../types';

interface Props {
  postData: PostData;
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData: PostData = {
    title: 'hello world',
    date: 'today',
    category: 'personal',
    htmlContent: '<h1>CONTENT</h1>',
  };
  return {
    props: { postData },
  };
};

const PersonalBlog: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <h1>{postData.title}</h1>
        <h1>{postData.date}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { getStaticPaths, getStaticProps };
export default PersonalBlog;
