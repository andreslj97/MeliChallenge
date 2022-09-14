import { allImages } from "../../Utils/importAllImages";

const NotFound = ()=>{
    return(
        <>
            {console.log('IMAGES',allImages)}
            <img style={{margin:'0 auto',display:'block'}} src={allImages["img404.png"]} alt="404" />
        </>
    )
}

export default NotFound