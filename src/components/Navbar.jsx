import React from "react";
import { ProductContext } from '../utils/Context';
import { useContext} from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
    const [products] = useContext(ProductContext);
    let distinct_category = products.reduce((acc, item) => [...acc, item.category], []);
    distinct_category = [...new Set(distinct_category)];
    console.log(distinct_category);

    return (
        <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center ">
           
            <div className="pt-4 border text-xl rounded border-blue-300 p-3 my-5 mt-8 text-blue-400 "> Add New Product </div>
            <hr className="mt-3 w-[80%] "></hr>
            <h1 className="my-4 text-2xl w-[80%] font-medium"> Category Filter</h1>
            <div className="flex flex-col">
            {distinct_category && distinct_category.length > 0 ? (
                distinct_category.map((category) => (
                    <Link key={category.id || category} to={`/?category=${category.id || category}`} className="flex items-center mb-4 text-xl">
                        <span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]"></span>
                        {category.name || category}
                    </Link>
                ))
            ) : (
                <p>No categories available</p>
            )}

            </div>
           

          
        </nav>
    );
}
