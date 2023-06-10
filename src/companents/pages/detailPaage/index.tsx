import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {useParams} from "react-router-dom";
import {getDetailSuccess} from "../../../store/Reducers/ActionCreators";
import Actors from "../Actors";
import Trailers from "../Trailers";
const DetailPage = () => {
    const {moviedetail,lang} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    const {movieId} = useParams()

    useEffect(() => {
        dispatch(getDetailSuccess(movieId,lang))
    })
    const {poster_path,title,overview,runtime,vote_average,backdrop_path} = moviedetail
    return (
        <div className={'DetailPage'} style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path}") left center / cover no-repeat`}}>
                <div className={'flex justify-around'}>
                    <div>
                        <img className={'my-5'} width={300} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt=""/>
                    </div>
                    <div className='flex flex-col mx-[10%] my-[5%] flex-col items-center'>
                        <h1 className='text-2xl font-black text-cyan-100'>{title}</h1>
                        <div className='flex items-center'>
                            <div className="vote">
                                <h1 className='text-green-200 font-bold'>{Math.round(vote_average * 10)}%</h1>
                            </div>
                        </div>
                        <h4 className='text-cyan-100 font-bold'>{Math.floor(runtime / 60)}h {runtime % 60} min</h4>
                        <h2 className='w-[490px] text-1xl text-cyan-100 font-medium'>{overview}</h2>
                    </div>
                </div>
                <Actors movieId={movieId}/>
            <Trailers trailersId={movieId}/>
        </div>
    );
};

export default DetailPage;