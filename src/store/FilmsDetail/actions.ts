import { Dispatch } from "redux";
import getFilmsDetail from "services/getFilmsDetail";

import { IStoreDetail } from "./types";

export const setFilmsDetailAction = (list : IStoreDetail['list']) => {
  return{
    type : 'filmsDertail/setFilmsDetail',
    payload : list,
  }
}

export const loadFilmsDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    const responce = await getFilmsDetail(id);
    dispatch(setFilmsDetailAction(responce.data))
  } catch (e) {
    console.log (e, 'Произошла ошибка')
  }
}