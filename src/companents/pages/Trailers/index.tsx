import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hook";
import {getTrailersSuccess} from "../../../store/Reducers/ActionCreators";
import Slider from "react-slick"
const Trailers = ({trailersId}:any) => {
    const {trailers} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTrailersSuccess(trailersId))
    },[trailersId])
    interface ISettings {
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number
    }
    const settings:ISettings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4
    };
    return (
        <div>
            <div className={'container'}>
                <Slider{...settings}>
                    {
                        trailers.slice(0,10).map(el => (
                            <div key={el.id}>
                                <iframe width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </Slider>

            </div>

        </div>
    );
};

export default Trailers;