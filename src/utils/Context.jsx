import React, { useState, createContext,useEffect } from 'react';
import axios from './axios';
export let ProductContext = createContext();
export  function Context(props) {
    console.log(props);
    let [products, setProducts] = useState(null);
    const getproducts = async () => {
        try {
            const { data } = await axios('/products');
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
          getproducts();
    }, []);

    return (
        <>
            <ProductContext.Provider value={[products, setProducts]} >
                {props.children}
            </ProductContext.Provider>

        </>
    );
}