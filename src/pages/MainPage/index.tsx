import './styles.scss';
import routeMain from './routs';

import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { loadFilms } from 'store/Films/actions';
import { selectList } from 'store/Films/selectors';
import { TypeDispatch } from 'types/TypeDispatch';

import MainFilmsList from 'components/MainFilmsList';


const MainPage = () => {
  const dispatch = useDispatch<TypeDispatch>();
  const filmsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilms(`girls`));
  },[dispatch]);

  return (
    <section className='mainPage'>
      <h1>MOVIESinfo</h1>
      <p className='main_tagline'>Самый популярный портал о фильмах</p>
      {
        <MainFilmsList list={filmsList.slice(0,8)}/>
      }
    </section>
  )
}

export {routeMain};

export default MainPage;