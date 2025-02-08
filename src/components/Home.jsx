import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
import {ProductContext} from './utils/Context';
import {useContext} from 'react' ;
import Loading from './Loading';
export default function Home() {
  const [products]= useContext(ProductContext);
  console.log(products);

    return products ? (
        <div className=" w-screen h-screen flex  " >
            <Navbar />
            <Link to={'/details'} className="card shadow-xl rounded w-[19%] h-[40vh] bg-white flex-col flex justify-center items-center m-8 ">
                <div className="w-[60%] h-[80%] bg-contain bg-no-repeat hover:scale-110 mb-2 " style={{ backgroundImage: "url(https://media.istockphoto.com/id/1405455585/photo/buddha-image-on-white-background-isolate.jpg?s=2048x2048&w=is&k=20&c=TYZkFMCEjxtqm83siHOQaANGNwmLiC9aOnhfQehnlvU=)" }} ></div>
                <div className="hover:text-blue-700"> This is the Title of product </div>
            </Link>
        </div>
    ) : (
        <Loading />
    );
}