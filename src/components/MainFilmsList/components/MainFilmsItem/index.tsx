import "./styles.scss";
import prepareDate from "utils/preparedate";
import noImg from 'assets/img/noImg.png';

import { NavLink } from 'react-router-dom';
import { routeMain as routeFilmsDetail } from "pages/FilmsDetail";

import { IFilmsDetail } from "types/IFilmsDetail";

interface IMainFilmsItemParams {
  item : IFilmsDetail;
}

const MainFilmsItem: React.FC<IMainFilmsItemParams> = ({item}) => {
  const year: number = prepareDate(item.premiered);
  const genres: string = item.genres.join(', ');

  return (
    <NavLink className="item_wrapper" to={routeFilmsDetail(item.id)}>
      <div className="img_wrapper">
        {
          item.image === null ?
          <img src={noImg} alt={noImg}/> :
          <img src={item.image.medium} alt={item.image.medium}/>
        }
      </div>
      <h2 className="films_name">{item.name}</h2>
      <p className="films_year">{year} 
        {
          item.network === null ?
          <></> :
          <> ({item.network.country.name})</>
        }
      </p>
      <p className="films_genres">{
        genres.length > 0 && genres
      }</p>
    </NavLink>
  )
}
  

export default MainFilmsItem;