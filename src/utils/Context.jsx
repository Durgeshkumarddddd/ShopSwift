import React, { useState, createContext } from 'react';
import axios from './axios';
export const ProductContext = createContext();
export default function Context(props) {
    console.log(props);
    let [products, setProducts] = useState(null);
    const getproducts = async () => {
        try {
            const { data } = await axios('/products');
            setProducts(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getproducts();
    }, []);

    return (
        <>
            <ProductContext.Provider value={[products, setProducts]} >
                {probes.children}
            </ProductContext.Provider>

        </>
    );
}