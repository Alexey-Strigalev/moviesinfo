import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getFilmsDetail = (id:string): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://api.tvmaze.com/shows/${id}`,
  }
  return axios.request(options);
}

export default getFilmsDetail;