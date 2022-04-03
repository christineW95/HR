import { useEffect, useState } from "react";

export function useFetch(listname){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        var spRequest = new XMLHttpRequest();  
        spRequest.open('GET',  `http://${window.location.host}/_api/web/lists/GetByTitle('${listname}')`,true);    
        spRequest.setRequestHeader("Accept","application/json"); 
        spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
        console.log({spRequest})
        spRequest.onreadystatechange = async function(){    
            if (spRequest.readyState === 4 && spRequest.status === 200){ 
                console.log({response:await spRequest.data})
              
                const data= await spRequest.data
                console.log({data})
                let newData=data.map((item,index)=>{
                    console.log({item})
                    return new TrainingRequestObj({title:item.title})
                })
                console.log({newData})
                setData(newData)
            }    
            else if (spRequest.readyState === 4 && spRequest.status !== 200){    
                console.log('Error Occured !');    
                console.log({spRequest});    
                alert('Error')
            }    
        };    
        spRequest.send();    
},[listname])
    return { data, error, loading }
}