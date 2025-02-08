import {Link } from 'react-router-dom'
export default function Details(){
    return (
        <>
            <div className="w-[80%] h-screen  m-auto flex flex-row px-[5%] py-[5%]">
            
                    <img className="w-[50%] h-[90%] mr-[2%] object-contain" src="https://media.istockphoto.com/id/1405455585/photo/buddha-image-on-white-background-isolate.jpg?s=2048x2048&w=is&k=20&c=TYZkFMCEjxtqm83siHOQaANGNwmLiC9aOnhfQehnlvU="></img>
                    <div className=""> 
                    <h1 className="text-3xl"> All Detais of Product </h1>             
                    <h2> Second list of product  </h2>Zaw
                    <h3> Three songs to the </h3>
                   <div className='flex flex-row justify-between'>
                  
                <Link className='mr-[4%] bg-amber-500 text-2xl border-red-100 px-[15%] py-[5%] rounded-xl ' to={'/edit'} >Edit</Link>
                <Link  className='bg-amber-500 text-2xl border-red-100 px-[11%] py-[5%] rounded-xl '  to={'/delete'} >Delete</Link>
              </div>      
              
            </div>
            </div>
         </>
    );
}