import React from 'react';
import {BsFillTrash3Fill} from "react-icons/bs";
import {useAppDispatch} from "../../../Hook";
import {getDelete} from "../../../store/Reducers/MovieSlice";

const BasketRow = ({product}:any) => {
    const dispatch = useAppDispatch()
    const GetDelete = () => {
        dispatch(getDelete(product))
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img width={60} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${product.backdrop_path}`} alt=""/>
            </th>
            <td className="px-6 py-4">
                {product.title}
            </td>
            <td className="px-6 py-4">
                Laptop
            </td>
            <td className="px-6 py-4">
                <BsFillTrash3Fill onClick={GetDelete} className={'text-red-600 text-2xl'}/>
            </td>
        </tr>
    );
};

export default BasketRow;