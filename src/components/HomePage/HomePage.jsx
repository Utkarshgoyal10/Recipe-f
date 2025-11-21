import MainHomePage from './MainHomePage';
import MainAuthSideBar from '../AuthSideBar/MainAuthSideBar';
import { useContext, React } from 'react';
import { AuthContext } from '../../context/AuthContext';

function HomePage() {

  const {openLogin } = useContext(AuthContext)

  return (
        <div className='relative'>
          <MainHomePage />
          {openLogin && <MainAuthSideBar />}
        </div>
  );
}

export default HomePage;
