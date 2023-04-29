import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import CategoriesPage, {routeMain as routeCategoriesPage} from 'pages/CategoriesPage';
import AboutPage, {routeMain as routeAboutPage} from 'pages/AboutPage';
import SearchPage, {routeMain as routeSearchPage} from 'pages/SearchPage';
import FilmsDetail, {routeMain as routeFilmsDetail} from 'pages/FilmsDetail';


function App() {
  return (
    <div className="App">
      <div className='mainBg'></div>
      <Header/>
      <main>
        <div className='container'>
          <Switch>
            <Route exact path={routeMainPage()} component={MainPage}/>
            <Route exact path={routeCategoriesPage()} component={CategoriesPage}/>
            <Route exact path={routeAboutPage()} component={AboutPage}/>
            <Route exact path={routeSearchPage()} component={SearchPage}/>
            <Route exact path={routeFilmsDetail()} component={FilmsDetail}/>
            <Redirect to={{
              pathname : routeMainPage()
            }}/>
          </Switch>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
