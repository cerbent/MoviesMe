import React from 'react';
import {useAppSelector} from "../../../Hook";
import BasketRow from "./BasketRow";

const BasketTable = () => {
    const {basket} = useAppSelector(state => state.movie)
    console.log(basket)
    return (
        <div className={'container'}>
            <div className="relative overflow-x-auto my-7">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Photo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                    </thead>
                    {
                        basket.map(el =>   <BasketRow product={el}/>)
                    }
                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BasketTable;