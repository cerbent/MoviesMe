import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {IActors, IActorsMovie, IDetail, IDetailActors, IFilm, IPopular, IRated, ITrailers} from "../../Type";

interface IMovieState {
 popular: IPopular[],
    moviedetail: Partial<any>

    actors: IActors[],
    trailers: ITrailers[],
    rated: IRated[],
    film: IFilm[],
    dettail: Partial<any>,
    movieactors: IActorsMovie[],
    search: any[]
    basket:any[],
    favorite: any[]
    lang:string
}


const initialState: IMovieState = {
  popular: [],
    moviedetail: {},
    actors: [],
    trailers:[],
    rated: [],
    film: [],
    dettail: {},
    movieactors:[],
    search: [],
    basket: [],
    favorite: [],
    lang:'en-US'
}


export const MovieReducer = createSlice({
    name: "MOVIE",
    initialState,
    reducers: {
        getLanguage(state,action){
            state.lang = action.payload
        },
        getPopular(state,action) {
            state.popular = action.payload
        },
        getDetail(state,action : PayloadAction<IDetail[]>) {
            state.moviedetail = action.payload
        },
        getActors(state, action: PayloadAction<IActors[]>) {
            state.actors = action.payload
        },
        getTrailers(state,action: PayloadAction<ITrailers[]>){
            state.trailers = action.payload
        },
        getRated(state,action: PayloadAction<IRated[]>) {
            state.rated = action.payload
        },
        getFilm(state,action: PayloadAction<IFilm[]>) {
            state.film = action.payload
        },
        getDetailActors(state,action: PayloadAction<IDetailActors[]>) {
            state.dettail = action.payload
        },
        getMovieActors(state,action:PayloadAction<IActorsMovie[]>) {
            state.movieactors = action.payload
        },
        getSearch(state, action: PayloadAction<any[]>) {
            state.search = action.payload
        },
        getBasket(state,action : PayloadAction<any>) {
            const found = state.basket.find(el => el.id === action.payload.id)
            if (found){
                state.basket = state.basket.map(el => el.id === found.id ? {...el,quantity: el.quantity + 1}:el)
            }else {
                state.basket = [...state.basket, {...action.payload, quantity: 1}]
            }
        },
        getFavorite(state,action : PayloadAction<any>){
            const foundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorite){
                state.favorite = state.favorite.filter(el => el.id !== foundFavorite.id)
            }else {
                state.favorite = [...state.favorite, {...action.payload}]
            }
        },
        getDelete(state,action: PayloadAction<any>) {
            state.basket = state.basket.filter(el => el.id !== action.payload.id)
        }


    }
})

export default MovieReducer.reducer

export  const {getPopular,getLanguage,getDetail,getActors,getTrailers,getRated,getFilm,getDetailActors,getMovieActors,getSearch,getBasket,getFavorite,getDelete} = MovieReducer.actions