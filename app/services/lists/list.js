export default function RetrieveSPData(){    

    var spRequest = new XMLHttpRequest();  
    debugger;  
    spRequest.open('GET', 'http://192.168.111.65/_api/web/lists/GetByTitle("EmployeeServices")',true);    
    spRequest.setRequestHeader("Accept","application/json"); 
    spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
                        
    spRequest.onreadystatechange = function(){    
          
        if (spRequest.readyState === 4 && spRequest.status === 200){  
            var result = JSON.parse(spRequest.responseText);    
          console.log({result})    
        }    
        else if (spRequest.readyState === 4 && spRequest.status !== 200){    
            console.log('Error Occured !');    
            alert('Error')
        }    
    };    
    spRequest.send();    
}    