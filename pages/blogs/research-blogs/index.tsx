import { NextPage } from 'next';
import ResearchBlogBanner from '../../../components/Blog/Banner/ResearchBlogBanner';
import ResearchBlogList from '../../../components/Blog/BlogList/ResearchBlogList';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
const ResearchBlogs: NextPage = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <ResearchBlogBanner />
        <ResearchBlogList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ResearchBlogs;
