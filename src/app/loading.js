import Image from "next/image";
import loadingdesign from './picture/loadingdesignV2.png'
import './globals.css'
export default function Loading(){
    return(<>
    <div className="loading-con" >
            <div className="loading-img-con" >
            <Image className="loading-img" src={loadingdesign} ></Image>
            </div>
            <p>Loading Please wait</p>     
    </div>
    
    </>)
}