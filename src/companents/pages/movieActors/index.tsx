import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {getMovieActorsSuccess} from "../../../store/Reducers/ActionCreators";
import Slider from "react-slick"
import {useNavigate} from "react-router-dom";

const MovieActors = ({movieActorsId}:any) => {
    const {movieactors} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieActorsSuccess(movieActorsId))
    })
    const nav = useNavigate()
    interface IActors {
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number
    }

    const settings :IActors = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6
    }
    return (
        <div className='containers'>
            <Slider{...settings}>
                {
                    movieactors.slice(0,20).map(el => (
                        <div className='flex flex-col justify-center mx-6'>
                            <img onClick={() => nav(`/detail-page/${el.id}`)} width={200} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                            <h1 className='font-bold text-center'>{el.name}</h1>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default MovieActors;