import { createContext, useState } from "react";
import { apiKey } from "./config";

export const ImageContext = createContext({});
const ImageProvider =(props)=>{
    const [photos,setPhotos] = useState([])

    const search = async query=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        const res = await fetch(url, {})
        const jsonData = await res.json()
        
        console.log(jsonData)
        setPhotos(jsonData.photos)
    }

    return <ImageContext.Provider value={[photos, search]} {...props}/>
}
export default ImageProvider;