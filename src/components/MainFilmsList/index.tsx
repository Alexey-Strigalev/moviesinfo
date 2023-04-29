import "./styles.scss";
import MainFilmsItem from "./components/MainFilmsItem";

import { IFilms } from "types/IFilms";

interface IMainFilmsListPatams {
  list : IFilms[];
}

const MainFilmsList : React.FC<IMainFilmsListPatams> = ({list}) => (
  <div className="mainFilmsList">
    {
      list.map((films: IFilms) => (
        <MainFilmsItem key={films.show.id} item={films.show}/>
      ))
    }
  </div>
)

export default MainFilmsList;