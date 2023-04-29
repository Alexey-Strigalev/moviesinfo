export interface IFilmsDetail {
  genres : string [] | null [];
  id: string;
  image: null | {
    medium : string;
    original : string;
  };
  name : string;
  network : null | {
    country : {
      name : string;
    }
  }
  premiered : string;
  rating: {
    average : null | number;
  }
  summary : string | null;
}