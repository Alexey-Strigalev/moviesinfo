import "./styles.scss";
import routeMain from './routs';
import noImg from 'assets/img/noImg.png';

import prepareDate from "utils/preparedate";

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { loadFilmsDetail } from "store/FilmsDetail/actions";
import { selectListDetail } from "store/FilmsDetail/selectors";
import { TypeDispatch } from 'types/TypeDispatch';

import { ID } from "types/ID";


const FilmsDetail = () => {
  const {id} = useParams<ID>();

  const dispatch = useDispatch<TypeDispatch>();
  const filmsListDetail = useSelector(selectListDetail);

  useEffect(() => {
    dispatch(loadFilmsDetail(id));
  },[dispatch, id]);

  let year, name, image, genres, rating, country : number | null | string | undefined = null;
  let summary : string = '';

  if (filmsListDetail[0]) {
    year = prepareDate(filmsListDetail[0].premiered);
    name = filmsListDetail[0].name;
    if (filmsListDetail[0].image === null) {
      image = <img src={noImg} alt={noImg}/>
    } else {
      image = <img src={filmsListDetail[0].image.medium} alt={filmsListDetail[0].image.medium}/>;
    }
    genres = filmsListDetail[0].genres.join(', ');
    if (filmsListDetail[0].summary){
      summary = filmsListDetail[0].summary;
    }
    if (filmsListDetail[0].rating.average !== null) {
      rating = filmsListDetail[0].rating.average;
    } else {
      rating = '?'
    }
    if (filmsListDetail[0].network !== null) {
      country = filmsListDetail[0].network.country.name;
    }
  }

  const createMarkup = (item : string) => {
    return {__html: item};
  }
  
  return (
    <section className='newsDetailPage'>
      <div className="filmsRating">{rating}/10</div>

      <div className="image-wrapper">
        {image}
      </div>

      <div className="films-detail_wrapper">
        <h3>{name}</h3>
        <div className="year-detail_wrapper">
          <h4>Год выхода:</h4>
          <div>{year}</div>
        </div>
        <div className="country-detail_wrapper">
          <h4>Страна:</h4>
          <div>{country}</div>
        </div>
        <div className="genres-detail_wrapper">
          <h4>Жанр:</h4>
          <div>{genres}</div>
        </div>
        <div className="summary-detail_wrapper">
          <h4>Описание:</h4>
          {
            summary !== '' ? 
            <div dangerouslySetInnerHTML={createMarkup(summary)}></div> : null
          }
        </div>
      </div>

    </section>
  )
}

export {routeMain};

export default FilmsDetail;