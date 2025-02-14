import React from 'react';
import Navbar from "./Navbar";
import { Link,useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context';
import { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import axios from '../utils/axios';
export default function Home() {
    
    const [products] = useContext(ProductContext);
    const {search} = useLocation();
    let category = decodeURIComponent( search.split("=")[1]);
    let [filterProducts, setfilterProducts] = useState(null);

    const getcategorydata = async ()=>{
          try{
            let {data} = await axios.get(`/products/category/${category}`)
            setfilterProducts(data);
          }catch(err){
            console.log(err);
            alert("Error in fetching data")
          }
    }
    useEffect(()=>{
        if(!filterProducts || category == "undefined") setfilterProducts(products)
        if(category != "undefined") getcategorydata();
    },[category, products])

    
    return products ? (
        <div className="h-screen w-screen flex">
            <Navbar />
            <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto mt-[5%]">
                {filterProducts && filterProducts.map((product) =>
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