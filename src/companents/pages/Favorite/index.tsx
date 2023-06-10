import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {NavLink} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import {getFavorite} from "../../../store/Reducers/MovieSlice";

const Favorite = () => {
    const {favorite} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    console.log('favorite',favorite.map(el => el[0]))
    const AddToFavorite = (el:any) => {
        dispatch(getFavorite(el))
    }

    return (
        <div className={'container flex items-center justify-between flex-wrap'}>
            {
                    favorite.map(el => (
                        <div className={'flex items-center flex-col justify-center'}>
                            <NavLink to={`/detail-page/${el.id}`}>
                                <img className={'rounded-2xl my-4 mx-8'} width={300} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                            </NavLink>
                            <button className={'bg-red-600 px-3 py-2 rounded-2xl text-white font-black'}>Add to Basket</button>
                            <h1 className={'font-black text-red-600'}>{el.title}</h1>
                            <AiFillHeart style={{color: favorite.some(e => e.id === el.id) ? "red": ""}} className={'text-white text-4xl'} onClick={() => AddToFavorite(el)}/>
                        </div>
                    ))

            }
        </div>
    );
};

export default Favorite;