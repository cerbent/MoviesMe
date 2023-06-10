import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {getPopularSuccess} from "../../../store/Reducers/ActionCreators";
import {NavLink, useNavigate} from "react-router-dom";
import {getBasket, getFavorite} from "../../../store/Reducers/MovieSlice";
import {AiFillHeart} from "react-icons/ai";

const Popular = () => {
    const {popular,lang} = useAppSelector(state => state.movie)
    const {favorite,basket} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPopularSuccess(lang))
    },[lang])
    const AddToBasket = (el:any) => {
        dispatch(getBasket(el))
    }
    const AddToFavorite = (el:any) => {
        dispatch(getFavorite(el))
    }
    const nav = useNavigate()
    return (
        <div className={'Popular'}>
            <div className={'container'}>
                <div className={'flex items-center justify-between flex-wrap'}>
                    {
                    popular.map(el => (
                        <div className={'flex items-center flex-col justify-center'}>
                            <NavLink to={`/detail-page/${el.id}`}>
                                <img className={'rounded-2xl my-4 mx-8'} width={300} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                            </NavLink>
                            {
                              basket.some(e => e.id === el.id)  ?                            <NavLink to={"/Basket"} > <button onClick={() => AddToBasket(el)} className={'bg-green-600 px-3 py-2 rounded-2xl text-white font-black'}>Crate to Basket</button>

                              </NavLink>
                                  :                             <button onClick={() => AddToBasket(el)} className={'bg-red-600 px-3 py-2 rounded-2xl text-white font-black'}>Add to Basket</button>
                            }
                            <h1 className={'font-black text-red-600'}>{el.title}</h1>
                            <AiFillHeart style={{color:  favorite.some(e => e.id === el.id) ? "red": ""}} className={'text-white text-4xl'} onClick={() => AddToFavorite(el)}/>
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    );
};

export default Popular;