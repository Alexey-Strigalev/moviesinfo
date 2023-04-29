import "./styles.scss";
import CategoriesFilmsItem from "./components/CategoriesFilmsItem";

import { IFilms } from 'types/IFilms';

interface ICategoriesFilmsListParams {
  list : IFilms[];
}

const CategoriesFilmsList: React.FC<ICategoriesFilmsListParams> = ({list}) => {
  return (
    <div className="categoriesWrapper">
      <div className="list-wrapper">
        {
          list.map((films : IFilms) => (
            <CategoriesFilmsItem key={films.show.id} item={films.show}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoriesFilmsList;