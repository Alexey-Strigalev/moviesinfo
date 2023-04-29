import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getFilms = (url:string): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://api.tvmaze.com/search/shows?q=${url}`,
  }

  return axios.request(options);
};

export default getFilms;

