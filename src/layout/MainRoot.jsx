import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';

const MainRoot = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-4 md:px-8 lg:px-10 mx-auto">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainRoot;
