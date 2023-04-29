import { AnyAction } from "redux";

import { IStoreDetail } from "./types";

const initialState = {
  list : []
}

const filmsDetailReducer = (state: IStoreDetail = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'filmsDertail/setFilmsDetail' : 
      return {...state,list: [action.payload]}
    default : 
      return state;
  }
}

export default filmsDetailReducer; 