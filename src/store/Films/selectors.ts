import { IStore } from "./types";

export const selectList = (state: {filmsReducer: IStore}): IStore['list'] => state.filmsReducer.list;