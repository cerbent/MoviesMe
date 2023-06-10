import {appDispatch} from "../../index";
import axios from "axios";
import {APIKEY} from "../../../Apikey";
import {
   getActors,
   getDetail,
   getDetailActors,
   getFilm, getLanguage,
   getMovieActors,
   getPopular,
   getRated, getSearch,
   getTrailers
} from "../MovieSlice";
import {IActors,IDetailId, ITrailers} from "../../../Type";


export const getPopularSuccess = (lang:any) => async (dispatch: appDispatch) => {
   const url = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}`)
   const {data} = await  url
   dispatch(getPopular(data.results))
}

export const getDetailSuccess = (id:any, lang:any) => async (dispatch: appDispatch) => {
   const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lang}`)
   const {data} = await resp
   dispatch(getDetail(data))
}

export const getActorsSuccess = (id:IActors) => async (dispatch: appDispatch) => {
   const url = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
   const {data} = await url
   dispatch(getActors(data.cast))
}


export const getTrailersSuccess = (id:ITrailers) => async (dispatch: appDispatch) => {
   const url = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
   const {data} = await url
   dispatch(getTrailers(data.results))
}

export const getRatedSuccess = (lang: any) => async (dispatch:appDispatch) => {
   const url = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lang}&page=1`)
   const {data} = await url
   dispatch(getRated(data.results))
}

export const getFilmSuccess = (lang: any) => async (dispatch:appDispatch) => {
   const url = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=${lang}&page=1`)
   const {data} = await url
   dispatch(getFilm(data.results))
}

export const getDetailActorsSuccess = (id: any) => async (dispatch: appDispatch) => {
   const resp = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=en-US`)
   const {data} = await resp
   dispatch(getDetailActors(data))
}

export const getMovieActorsSuccess = (id:any) => async (dispatch:appDispatch) => {
   const resp = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${APIKEY}&language=en-US`)
   const {data} = await resp
   dispatch(getMovieActors(data.cast))
}


export  const getSearchSuccess = (name: any) => async (dispatch: appDispatch) => {
   const res =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}`)
   const {data} = await  res
   dispatch(getSearch(data.results))
}

// export const getLang = (lang:any) => (dispatch:appDispatch) => {
//    getLanguage(lang)
// }

