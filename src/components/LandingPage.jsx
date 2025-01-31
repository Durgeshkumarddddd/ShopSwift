import React from "react";

const LandingPage = ()=>{
    return (
        <div>
             <div className="bg-red-100 w-screen h-screen flex  " >
             <nav className=" w-[15%] h-full bg-zinc-100 flex flex-col items-center"> 
             <div className="pt-4 border text-xl rounded border-blue-300 p-3 my-5 mt-8 text-blue-400 ">  Add New Product</div>
               <hr className="mt-3 w-[80%] "></hr>
              <h1 className="my-4 text-2xl w-[80%] font-medium ">  Category Filter</h1>
                    <ul className="w-[80%]" >
                    <li className="flex items-center mb-4 text-xl">  <span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]" ></span>  Card1</li>
                    <li className="flex items-center mb-4 text-xl"><span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]" ></span>Card2</li>
                    <li className="flex items-center mb-4 text-xl"  > <span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]" ></span> Card3</li>
                    <li className="flex items-center mb-4 text-xl"  > <span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]" ></span> Card4</li>
                    <li className="flex items-center mb-4 text-xl"  > <span className="mr-2 rounded-full bg-blue-300 w-[13px] h-[13px]" ></span> Card5</li>
                    </ul>
                    
             </nav>
              <div className=" bg-red-100 w-[85%] h-full  ">
                         <div className="card border shadow rounded w-[18%] h-[30vh] bg-blue-700 ">
                             <div className="w-full h-[80%] bg-contain" style={{backgroundImage : "url(https://media.istockphoto.com/id/1405455585/photo/buddha-image-on-white-background-isolate.jpg?s=2048x2048&w=is&k=20&c=TYZkFMCEjxtqm83siHOQaANGNwmLiC9aOnhfQehnlvU=)"}} ></div>
                         </div>
              </div>
              
             </div>
        </div>
    );
}

export default LandingPage;