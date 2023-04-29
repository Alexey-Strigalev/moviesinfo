import "./styles.scss";
import noImg from 'assets/img/noImg.png';

import { NavLink } from 'react-router-dom';
import { routeMain as routeFilmsDetail } from "pages/FilmsDetail";

import { IFilmsDetail } from "types/IFilmsDetail";

interface ICategoriesFilmsItemParams {
  item : IFilmsDetail;
}

const CategoriesFilmsItem: React.FC<ICategoriesFilmsItemParams> = ({item}) => {
  const genres: string = item.genres.join(', ');

  return (
    <NavLink className="categories-item_wrapper" to={routeFilmsDetail(item.id)}>
      <div className="categories-img_wrapper">
        {
          item.image === null ?
          <img src={noImg} alt={noImg}/> :
          <img src={item.image.medium} alt={item.image.medium}/>
        }
      </div>
      <div className="categories-text_wrapper">
        <h2 className="categories-films_name">{item.name}</h2>
        <p className="categories-films_genres">{
          genres.length > 0 && genres
        }</p>
      </div>
    </NavLink>
  )
}

export default CategoriesFilmsItem;