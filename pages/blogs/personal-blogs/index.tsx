import { NextPage } from 'next';
import PersonalBlogBanner from '../../../components/Blog/Banner/PersonalBlogBanner';
import PersonalBlogList from '../../../components/Blog/BlogList/PersonalBlogList';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';

const PersonalBlog: NextPage = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <PersonalBlogBanner />
        <PersonalBlogList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PersonalBlog;
