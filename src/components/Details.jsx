import { useParams, Link,useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {ProductContext} from '../utils/Context';
import axios from '../utils/axios';
import Loading from './Loading';
export default function Details(){
  const [product, setProduct] = useState(null);
     const [products, setProducts] = useContext(ProductContext);
     const { id } = useParams();
     console.log(id)
     const navigate = useNavigate();
  // const getproduct = async () =>{
  //   try{
  //     let {data} = await axios.get(`/products/${id}`)
  //     setProduct(data);
  //   }catch(err){console.log(err)};
  // }
  useEffect(() => {
    if(!product){
      setProduct(products.filter((p)=> p.id == id)[0])
    
    }
   
  }, [])
 function productDeletehandler(id){
    const filteredProducts= products.filter((p)=> p.id != id);
    setProducts(filteredProducts);
    localStorage.setItem('products', JSON.stringify(filteredProducts))
    navigate('/')
  }


  return product ? (
    <>
      <div className="w-[80%] h-screen  m-auto flex flex-row px-[5%] py-[5%]">

        <img className="w-[50%] h-[90%] mr-[3%] object-contain" src={product.image}></img>
        <div className="">
          <h1 className="text-3xl mt-4"> {product.title}</h1>
          <h2 className='text-xl mt-4'> Category :  {product.category} </h2>
          <p className='mt-4'> Description :  {product.description}   </p>
          <p className='mt-3 text-2xl'> Price :  {product.price} </p>
          {/* <div className='flex flex-col my-8'>
            <p className='text-xl  '> Rating :  {product.rating.rate} </p>
            <p className='text-xl '> Count of Rate :  {`${product.rating.count}`} </p>
          </div> */}
          <div className='flex flex-row justify-between'>

            <Link to={`/edit/${id}`} className='mr-[4%] bg-amber-500 text-2xl border-red-100 px-[15%] py-[5%] rounded-xl ' >Edit</Link>
            <button onClick={()=> productDeletehandler(id)} className='bg-amber-500 text-2xl border-red-100 px-[11%] py-[5%] rounded-xl ' to={'/delete'} >Delete</button>
          </div>

        </div>
      </div>
    </>
  ): (
    <Loading ></Loading>
  );
}