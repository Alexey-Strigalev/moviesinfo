import './styles.scss';
import routeMain from './routs';

import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { loadFilms } from 'store/Films/actions';
import { selectList } from 'store/Films/selectors';
import { TypeDispatch } from 'types/TypeDispatch';

import CategoriesFilmsList from 'components/CategoriesFilmsList';

const SearchPage = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch<TypeDispatch>();
  const filmsList = useSelector(selectList);

  const getSearchInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
    
  const searchFilms = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loadFilms(value));
  }
  
  const searchFilmsOnKey = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(loadFilms(value));
    }
  }

  useEffect(() => {
    value === '' && dispatch(loadFilms(value));
  },[dispatch, value]);

  return (
    <section className='searchPage'>
      <h3>Поиск по категории</h3>
      <form>
        <input type={'text'}
          placeholder='Example: drama'
          value={value}
          onChange={getSearchInput}
          onKeyDown={searchFilmsOnKey}
        />
        <button onClick={searchFilms}>Найти</button>
      </form>
      <p>Результаты поиска:</p>
      {
        value !== '' ? <CategoriesFilmsList list={filmsList.slice(0,10)}/> : <div className='searchResalt'>Введите поисковой запрос<br/>для отображения результатов</div>
      }

    </section>
  )
}

export {routeMain};

export default SearchPage;