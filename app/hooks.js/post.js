import { useEffect, useState } from "react";
import axios from 'axios'

export function usePost(listname){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        let data={
            'Title':'Test1',
        }
        var getData =({});
        for(var d in data){
            getData[d] = getData[d];  
        }
        getData.__metadata ={
            type:  `SP.Data.${listname}ListItem`
        }
        var axiosConfig =  {
            headers: {  
                  "Accept": "application/json",    
                  "Access-Control-Allow-Origin":"*" ,
               
            }
         }
        console.log({getData})
        axios.post(`http://${window.location.host}/_api/web/lists/getByTitle('${listname}')/items`, getData, axiosConfig)
    .then(function (response) {
        console.log({response});                   
    })
    .catch(function (error) {
        console.log({error});
})




        // var data = new FormData();
        // data.append('Title', 'Test1');
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST',  `http://${window.location.host}/_api/web/lists/getByTitle('${listname}')/items`,true);    
        // xhr.onreadystatechange = async function(){    
        //     if (xhr.readyState === 4 && xhr.status === 200){ 
        //         console.log({response:await xhr.data})
        //         const result=await xhr.data
        //         setData(result)
        //     }    
        //     else if (xhr.readyState === 4 && xhr.status !== 200){    
        //         console.log('Error Occured !');    
        //         console.log({xhr}); 
        //         setError(xhr)   
        //         alert('Error')
        //     }    
        // };  
        // xhr.send(data);
    
    
    
           
    },[listname])
    return { data, error, loading }
}