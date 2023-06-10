import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootReducer} from "../store";
import exp from "constants";


export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector

export const useAppDispatch = () => useDispatch<appDispatch>()