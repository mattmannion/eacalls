import { VFC } from 'react';

const header: VFC = () => (
  <>
    <header>
      <div className='hero-main'>Hero Image</div>
      <div className='nav'>
        <div className='nav__home'>Home</div>
        <div className='nav__open'>Open</div>
        <div className='nav__history'>History</div>
        <div className='nav__stats'>Stats</div>
        <div className='nav__logout'>Logout</div>
        <div className='nav__welcome'>
          Welcome, <span className='nav__current-user'>Matt</span>
        </div>
      </div>
    </header>
  </>
);

export default header;
