import { IStoreDetail } from "./types";

export const selectListDetail = (state: {filmsDetailReducer: IStoreDetail}): IStoreDetail['list'] => state.filmsDetailReducer.list;