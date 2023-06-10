import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {getActorsSuccess} from "../../../store/Reducers/ActionCreators";
import Slider  from 'react-slick'
import {IActors, IDetail} from "../../../Type";
import {NavLink} from "react-router-dom";
const Actors = ({movieId}:any) => {
    const {actors} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getActorsSuccess(movieId))
    },[movieId])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div id={'actors'} className={'my-[5%]'}>
            <div className={'container'}>
                <Slider{...settings}>
                    {
                        actors.slice(0,20).map(el => (
                            <div className={'Actors'}>
                                <div className={'flex flex-col items-center'}>
                                    <NavLink to={`/detail-actors/${el.id}`}>
                                        <img width={200} src={`https://www.themoviedb.org/t/p/w375_and_h375_face${el.profile_path}`} alt=""/>
                                    </NavLink>
                                    <h1 className={'font-mono text-white'}>{el.name}</h1>
                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>
        </div>

    );
};

export default Actors;