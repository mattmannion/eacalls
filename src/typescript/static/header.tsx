import { VFC } from 'react';
import { Link } from 'react-router-dom';
import EAcallsysHero from '../../res/img/logo/EALogoW-crop.png';

const header: VFC = () => (
  <>
    <header>
      <div className='hero-main'>
        <img src={EAcallsysHero} />
      </div>
      <div className='nav'>
        <Link className='nav__home' to='/'>
          Home
        </Link>
        <a href='#open' className='nav__open'>
          Open
        </a>
        <a href='#history' className='nav__history'>
          History
        </a>
        <Link className='nav__stats' to='/stats'>
          Stats
        </Link>
        <div className='nav__logout'>Logout</div>
        <div className='nav__welcome'>
          Welcome, <span className='nav__current-user'>Matt</span>
        </div>
      </div>
    </header>
  </>
);

export default header;
