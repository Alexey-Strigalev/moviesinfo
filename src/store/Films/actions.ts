import {Dispatch} from 'redux';
import getFilms from 'services/getFilms';

import { IStore } from './types';

export const setFilmsAction = (list: IStore['list']) => {
  return {
    type: 'films/setFilms',
    payload : list,
  }
}

export const loadFilms = (url:string) => async (dispatch: Dispatch) => {
  try {
    const response = await getFilms(url);
    dispatch(setFilmsAction(response.data))
  } catch (e) {
    console.log (e, 'Произошла ошибка')
  }
}