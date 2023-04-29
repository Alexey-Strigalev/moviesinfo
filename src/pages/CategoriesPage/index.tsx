import './styles.scss';
import routeMain from './routs';

import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { loadFilms } from 'store/Films/actions';
import { selectList } from 'store/Films/selectors';
import { TypeDispatch } from 'types/TypeDispatch';

import CategoriesFilmsList from 'components/CategoriesFilmsList';


const CategoriesPage = () => {
  const [category, setCategory] = useState('animals');
  const cangeCategori = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch<TypeDispatch>();
  const filmsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilms(category));
  },[dispatch, category]);

  return (
    <section className='categoriesPage'>
      <h3>Выбранная категория:
        <select onChange={cangeCategori}>
          <option>Animals</option>
          <option>Girls</option>
          <option>Dogs</option>
          <option>Horrors</option>
          <option>Comedy</option>
          <option>Fantasy</option>
          <option>Air</option>
          <option>Cats</option>
          <option>Drama</option>
        </select>
      </h3>
      <CategoriesFilmsList list={filmsList}/>
    </section>
  )
}

export {routeMain};

export default CategoriesPage;