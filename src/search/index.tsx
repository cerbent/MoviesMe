import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Hook";
import {NavLink, useParams} from "react-router-dom";
import {getSearchSuccess} from "../store/Reducers/ActionCreators";

const Search = () => {
    const {search} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    const {movieName} = useParams()
    useEffect(() => {
        dispatch(getSearchSuccess(movieName))
    },[movieName])
    return (
        <div id={'search'}>
            <div className={'container'}>
                <div className='flex justify-around flex-wrap items-center'>
                    {
                        search.map(el => (
                            <div className='flex items-center justify-center flex-col'>
                                <NavLink to={`/detail-page/${el.id}`}>
                                    <img className='mx-1 my-6' width={300} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                                </NavLink>
                                <h1 className='text-cyan-50 font-black'>{el.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;