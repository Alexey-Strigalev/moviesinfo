import './styles.scss';

import logo from 'assets/img/logo.png';

import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from 'pages/MainPage';

const Logo = () => {
  return (
    <div className='logo_wrapper'>
      <NavLink to={routeMainPage()}>
        <img src={logo} alt={logo}/>
      </NavLink>
    </div>
  );
}

export default Logo;