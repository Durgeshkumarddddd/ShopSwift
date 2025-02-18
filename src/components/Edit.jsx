import React from 'react';
import {useState, useContext,useEffect} from 'react';
import {ProductContext} from '../utils/Context';
import { nanoid } from 'nanoid'
import {useNavigate, useParams,useLocation} from 'react-router-dom';

export default function Edit(){
    const {id} = useParams();
    const navigate = useNavigate();
     
    const [products, setProducts] = useContext(ProductContext);
    const [product, setProduct]= useState({
        title : "",
        description : "",
        category : "",
        price : "",
        image : "",
    });
    const changeHandler = (e)=>{
        console.log(e.target.name , e.target.value);
        setProduct({...product, [e.target.name] : e.target.value})
    }

    useEffect(()=>
    setProduct(products.filter((p)=> p.id == id)[0]),[id]
    )
 
    const submithandler =(e)=>{
       e.preventDefault();
       if(
        product.title.trim().length < 3 ||
        product.description.trim().length <5 ||
        product.category.trim().length < 3 || 
        product.price.trim().length < 1 || 
        product.image.trim().length < 5){
         alert('Please fill in all fields with minimum 4 character valid values');
         return;
       }
       
      let pi = products.findIndex((p)=> p.id == id)
       const copyData = [...products];
       console.log("copyDataInd Before", copyData[pi]);
       copyData[pi] = {...products[pi], ...product}
     
       setProducts(copyData);
       localStorage.setItem("products", JSON.stringify([...products, product]))
       navigate(`/details/${id}`)
    }

    return (
        <form onSubmit={submithandler}  className='flex items-center justify-center flex-col w-screen h-screen '>
            <h1 className='text-3xl ms-0 w-1/2 mb-7'> Edit Product  </h1>
                <input type="url" placeholder='Enter test' className="p-3  text-2xl rounded-xl bg-zinc-100 font-2 w-1/2 mb-4" name="image" onChange={changeHandler} value={product && product.image} />
                <input type="text"  name="title" placeholder='Title' className='bg-zinc-100 mb-4 p-2  w-1/2 text-2xl rounded-xl ' onChange={changeHandler} value={product.title}  />
                <div className='w-1/2 flex justify-between mb-4'>
                <input type="text" value={product.category}   name="category " placeholder='Category' onChange={changeHandler} className='w-[49%] bg-zinc-100  p-3 text-2xl rounded-xl' />
                <input type='Number' value={product.price} name='price' placeholder='Price' onChange={changeHandler} className=' w-[48%] bg-zinc-100  p-3 text-2xl rounded-xl' ></input>
                </div>
                <textarea name='description' value={product.description} type='text' placeholder='Description' onChange={changeHandler} className='p-3  bg-zinc-100  w-1/2 mb-4 h-[25%] text-2xl rounded-xl'></textarea>
                <div className='w-1/2'>
                <button type='submit' className='p-3 m-2 border-blue-200 rounded border text-blue-500 text-xl ' > update Product </button>
                </div> 
        </form>
     );
}