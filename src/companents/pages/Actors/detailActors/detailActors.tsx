import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../Hook";
import {getDetailActorsSuccess} from "../../../../store/Reducers/ActionCreators";
import {useParams} from "react-router-dom";
import MovieActors from "../../movieActors";

const DetailActors = () => {
    const {dettail} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    const {castId} = useParams()
    const [rich, setRich] = useState(150)
    const getRich = (e:any) => {
        setRich(rich === 150 ? e.length: 150)
    }
    useEffect(() => {
        dispatch(getDetailActorsSuccess(castId))
    },[castId])
    console.log(dettail)
    const {birthday,profile_path,name,biography} = dettail
    return (
        <div  id='dettail'>
            <div className='containers'>
                <div className='flex items-center'>
                    <img className='mx-[120px] my-10' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    <div className='flex flex-col items-center mx-[110px]'>
                        <h2 className='text-cyan-100 font-bold'>{name}</h2>
                        <h3 className='text-cyan-100 font-medium'>{birthday}</h3>
                        <p className='text-cyan-100 w-[600px]'>{biography}</p>
                        <p className='text-cyan-100 w-[600px]'>{biography ? biography.slice(0,rich) : biography}</p>
                        {biography ? biography.length ? <span className='spent' onClick={() =>getRich(biography)} style={{cursor: 'pointer',color: 'yellow'}}>{rich === 150 ? "читать дальше" : "закрыть!"}</span> : "" : ""}
                    </div>
                </div>
                <MovieActors movieActorsId={castId}/>
            </div>
        </div>
    );
};

export default DetailActors;