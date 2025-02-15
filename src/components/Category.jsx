import { useState, useContext } from "react";
import { ProductContext } from '../utils/Context';
import Navbar from './Navbar';
import {Link, useParams,useLocation} from 'react-router-dom';
export default function Category() {
    const [products] = useContext(ProductContext);
    let catUrl = useParams()
    //  console.log(catUrl);
    let {pathname} = useLocation()
    let newCategory = pathname.split('=');
    //  let category = search.split("=")
    //  console.log("Location : ",category)
    if (!products) return null;
    return products ? (
        <div className="h-screen w-screen flex">
             <Navbar />
            <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto mt-10">
                {products.map((product) =>
                    <Link to={`/details/${product.id}`} className="card shadow-xl rounded w-[19%] h-[40vh] bg-white flex-col flex justify-center mb-12 ml-7 items-center p-4">
                        <div className="w-[60%] h-[80%] bg-contain flex justify-center items-center bg-no-repeat hover:scale-110 " style={{ backgroundImage: `url(${product.image})` }} ></div>
                        <div className="hover:text-blue-700"> {product.title}</div>
                    </Link>
                )}
            </div>

        </div>
    ) : (
        <Loading />
    );

}
