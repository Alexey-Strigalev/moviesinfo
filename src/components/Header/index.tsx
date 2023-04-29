import './styles.scss';

import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from 'pages/MainPage';
import { routeMain as routeCategoriesPage } from 'pages/CategoriesPage';
import { routeMain as routeAboutPage } from 'pages/AboutPage';
import { routeMain as routeSearchPage } from 'pages/SearchPage';

import Logo from 'components/Logo';

const Header = () => {
  return (
    <header className='main_header'>
      <div className='container'>
        <div className='header_wrapper'>
          <Logo/>
          <nav className='nav_wrapper'>
            <NavLink to={routeMainPage()} activeClassName={'linkActive'}>Главная</NavLink>
            <NavLink to={routeCategoriesPage()} activeClassName={'linkActive'}>Фильмы по категориям</NavLink>
            <NavLink to={routeAboutPage()} activeClassName={'linkActive'}>О нас</NavLink>
            <NavLink to={routeSearchPage()} activeClassName={'linkActive'}>Поиск</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;