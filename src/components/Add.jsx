import React from 'react';
import {useState, useContext} from 'react';
import {ProductContext} from '../utils/Context';
import { nanoid } from 'nanoid'
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
export default function Add(){
     

    const [products, setProducts] = useContext(ProductContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const submithandler =(e)=>{
       e.preventDefault();
       if(title.trim().length < 5 || description.trim().length <5 || category.trim().length < 5 || price.trim().length < 2 || image.trim().length < 5){
         alert('Please fill in all fields with minimum 4 character valid values');
         return;
       }
       const product = {
        id : nanoid() ,
        title,
        description,
        category,
        price,
        image,
       }
       setProducts([...products, product]);
       localStorage.setItem("products", JSON.stringify([...products, product]))
       toast.success("🟢 Success! Your action was completed.");
       navigate('/')
    }

    return (
        <form onSubmit={submithandler}  className='flex items-center justify-center flex-col w-screen h-screen '>
            <h1 className='text-3xl ms-0 w-1/2 mb-7'> Add New Product  </h1>
                <input type="url" placeholder='Enter test' className="p-3  text-2xl rounded-xl bg-zinc-100 font-2 w-1/2 mb-4" name="image" onChange={(e)=> setImage(e.target.value)} value={image} />
                <input type="text"  name="title" placeholder='Title' className='bg-zinc-100 mb-4 p-2  w-1/2 text-2xl rounded-xl ' onChange={(e)=> setTitle(e.target.value)} value={title}  />
                <div className='w-1/2 flex justify-between mb-4'>
                <input type="text" value={category}   name="category " placeholder='Category' onChange={(e)=> setCategory(e.target.value)} className='w-[49%] bg-zinc-100  p-3 text-2xl rounded-xl' />
                <input type='Number' value={price} name='price' placeholder='Price' onChange={(e)=> setPrice(e.target.value)} className=' w-[48%] bg-zinc-100  p-3 text-2xl rounded-xl' ></input>
                </div>
                <textarea name='description' value={description} type='text' placeholder='Description' onChange={(e)=> setDescription(e.target.value)} className='p-3  bg-zinc-100  w-1/2 mb-4 h-[25%] text-2xl rounded-xl'></textarea>
                <div className='w-1/2'>
                <button type='submit' className='p-3 m-2 border-blue-200 rounded border text-blue-500 text-xl ' > Add Product </button>
                </div> 
        </form>
     );
}