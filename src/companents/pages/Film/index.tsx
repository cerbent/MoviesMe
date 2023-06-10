import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {getFilmSuccess} from "../../../store/Reducers/ActionCreators";
import {NavLink} from "react-router-dom";

const Film = () => {
    const {film,lang} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFilmSuccess(lang))
    },[lang])
    return (
        <div className={'film'}>
            <div className={'container'}>
                <div className={'flex items-center justify-between flex-wrap'}>{
                    film.map(el => (
                        <div className={'flex items-center flex-col justify-center'}>
                            <NavLink to={`/detail-page/${el.id}`}>
                                <img className={'rounded-2xl my-4 mx-8'} width={300} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                            </NavLink>
                            <h1 className={'font-black text-red-600'}>{el.title}</h1>
                        </div>
                    ))
                }</div>

            </div>
        </div>
    );
};

export default Film;