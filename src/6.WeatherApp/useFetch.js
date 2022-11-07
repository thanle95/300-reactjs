import { useEffect, useState } from "react";

function useFetch(url){
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url, {
            "Transfer-Encoding": "chunked",
            "Connection": "keep-alive",
            "Vary": "Accept-Encoding",
            "CDN-PullZone": "93447",
            "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
            "CDN-RequestCountryCode": "GB",
            "CDN-ProxyVer": "1.03",
            "CDN-RequestPullSuccess": "True",
            "CDN-RequestPullCode": "200",
            "CDN-CachedAt": "11/04/2022 08:16:51",
            "CDN-EdgeStorageId": "595",
            "CDN-Status": "200",
            "CDN-RequestId": "f307d41d8fbab99a4b97d485b7902431",
            "CDN-Cache": "MISS",
            "Cache-Control": "public, max-age=180",
            "Content-Type": "application/json",
            "Date": "Fri, 04 Nov 2022 08:16:51 GMT",
            "Server": "BunnyCDN-CZ-595"
          })
            .then((res)=> res.json())
            .then((data)=> setData(data))
    },[url])
    return [data]
}
export default useFetch