import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import { getAllBlogIds, getBlogData } from '../../../lib/blogs';
import { BlogData } from '../../../types';

interface Props {
  blogData: BlogData | null;
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBlogIds('personal');
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getBlogData(params?.id as string, 'personal');
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
      <main className="w-full">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {blogData !== null ? (
            <>
              <div className="max-w-2xl mx-auto my-6">
                <div
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: blogData.htmlContent }}
                />
              </div>
            </>
          ) : (
            <>
              <h1 className=" font-bold text-4xl">
                Invalid blog data. Please check your markdown file.
              </h1>
            </>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { getStaticPaths, getStaticProps };
export default PersonalBlog;
