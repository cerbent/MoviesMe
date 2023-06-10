import {combineReducers} from "redux";
import MovieReducer from "./Reducers/MovieSlice";
import {configureStore} from "@reduxjs/toolkit";


export const rootState = combineReducers({movie: MovieReducer})

export const setUpStore = () => {
return configureStore({
    reducer: rootState
})
}

export type rootReducer = ReturnType<typeof rootState>
type appStore = ReturnType<typeof setUpStore>
export type appDispatch = appStore["dispatch"]