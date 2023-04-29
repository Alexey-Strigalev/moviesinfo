import filmsReducer from "store/Films/reducer";
import { AnyAction } from "redux";

import {ThunkDispatch} from "redux-thunk";

type ReduxState = ReturnType<typeof filmsReducer>;

export type TypeDispatch = ThunkDispatch<ReduxState, any, AnyAction>;