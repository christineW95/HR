import {window} from  'react-router-dom'
export default function RetrieveSPData(host){    

    var spRequest = new XMLHttpRequest();  
    debugger;  
    spRequest.open('GET',  `http://${host}/_api/web/SiteUsers`,true);    
    spRequest.setRequestHeader("Accept","application/json"); 
    spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
                        console.log({spRequest})
    spRequest.onreadystatechange = function(){    
          
        if (spRequest.readyState === 4 && spRequest.status === 200){  
            // var result = JSON.parse(spRequest.responseText);    
          console.log({data:spRequest.data})    
        }    
        else if (spRequest.readyState === 4 && spRequest.status !== 200){    
            console.log('Error Occured !');    
            console.log({spRequest});    
            alert('Error')
        }    
    };    
    spRequest.send();    
} 
export default function TrainingData(host,listname){    
console.log({listname})
    var spRequest = new XMLHttpRequest();  
    debugger;  
    spRequest.open('GET',  `http://${host}/_api/web/lists/GetByTitle('${listname}')`,true);    
    spRequest.setRequestHeader("Accept","application/json"); 
    spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
                        console.log({spRequest})
    spRequest.onreadystatechange = function(){    
          
        if (spRequest.readyState === 4 && spRequest.status === 200){  
            var result = JSON.parse(spRequest.responseText);    
          console.log({result})    
        }    
        else if (spRequest.readyState === 4 && spRequest.status !== 200){    
            console.log('Error Occured !');    
            console.log({spRequest});    
            alert('Error')
        }    
    };    
    spRequest.send();    
} 
export default function fetchListItems(host,listname)
{
    var spRequest = new XMLHttpRequest();  
    debugger;  
    spRequest.open('GET',  `http://${host}/_api/web/lists/GetByTitle('${listname}')/items`,true);    
    spRequest.setRequestHeader("Accept","application/json"); 
    spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
                        console.log({spRequest})
    spRequest.onreadystatechange = function(){    
          
        if (spRequest.readyState === 4 && spRequest.status === 200){  
            var result = JSON.parse(spRequest.responseText);    
          console.log({result})    
        }    
        else if (spRequest.readyState === 4 && spRequest.status !== 200){    
            console.log('Error Occured !');    
            console.log({spRequest});    
            alert('Error')
        }    
    };    
    spRequest.send();  
}
export default function fetcItemById(host,listname,id)
{
    var spRequest = new XMLHttpRequest();  
    debugger;  
    spRequest.open('GET',  `http://${host}/_api/web/lists/GetByTitle('${listname}')/items(${id})`,true);    
    spRequest.setRequestHeader("Accept","application/json"); 
    spRequest.setRequestHeader("Access-Control-Allow-Origin","*"); 
                        console.log({spRequest})
    spRequest.onreadystatechange = function(){    
          
        if (spRequest.readyState === 4 && spRequest.status === 200){  
            var result = JSON.parse(spRequest.responseText);    
          console.log({result})    
        }    
        else if (spRequest.readyState === 4 && spRequest.status !== 200){    
            console.log('Error Occured !');    
            console.log({spRequest});    
            alert('Error')
        }    
    };    
    spRequest.send();  
}
//    {spRequest: XMLHttpRequest}
// spRequest: XMLHttpRequest
// onabort: null
// onerror: null
// onload: null
// onloadend: null
// onloadstart: null
// onprogress: null
// onreadystatechange: ƒ ()
// ontimeout: null
// readyState: 4
// response: "{\"odata.metadata\":\"http://sharepoint2019/_api/$metadata#SP.ApiData.Users1\",\"value\":[{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(4)\",\"odata.editLink\":\"Web/GetUserById(4)\",\"Id\":4,\"IsHiddenInUI\":false,\"LoginName\":\"c:0(.s|true\",\"Title\":\"Everyone\",\"PrincipalType\":4,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":null},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(15)\",\"odata.editLink\":\"Web/GetUserById(15)\",\"Id\":15,\"IsHiddenInUI\":false,\"LoginName\":\"c:0!.s|windows\",\"Title\":\"NT AUTHORITY\\\\authenticated users\",\"PrincipalType\":4,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":null},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(17)\",\"odata.editLink\":\"Web/GetUserById(17)\",\"Id\":17,\"IsHiddenInUI\":false,\"LoginName\":\"NT AUTHORITY\\\\LOCAL SERVICE\",\"Title\":\"NT AUTHORITY\\\\LOCAL SERVICE\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-5-19\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(1)\",\"odata.editLink\":\"Web/GetUserById(1)\",\"Id\":1,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\sp_admin\",\"Title\":\"SP_Admin\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":true,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10775\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(1073741823)\",\"odata.editLink\":\"Web/GetUserById(1073741823)\",\"Id\":1073741823,\"IsHiddenInUI\":false,\"LoginName\":\"SHAREPOINT\\\\system\",\"Title\":\"System Account\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-0-0\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(3)\",\"odata.editLink\":\"Web/GetUserById(3)\",\"Id\":3,\"IsHiddenInUI\":false,\"LoginName\":\"EHC\\\\tempuser\",\"Title\":\"tempuser\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-5-21-3647675060-2355313432-1628888889-10771\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(8)\",\"odata.editLink\":\"Web/GetUserById(8)\",\"Id\":8,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\tempuser\",\"Title\":\"tempuser\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":true,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10771\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(18)\",\"odata.editLink\":\"Web/GetUserById(18)\",\"Id\":18,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_1\",\"Title\":\"Test user 1\",\"PrincipalType\":1,\"Email\":\"Test_1@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10810\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(19)\",\"odata.editLink\":\"Web/GetUserById(19)\",\"Id\":19,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_2\",\"Title\":\"Test user 2\",\"PrincipalType\":1,\"Email\":\"Test_2@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10813\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(21)\",\"odata.editLink\":\"Web/GetUserById(21)\",\"Id\":21,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_3\",\"Title\":\"Test user 3\",\"PrincipalType\":1,\"Email\":\"Test_3@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10812\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(20)\",\"odata.editLink\":\"Web/GetUserById(20)\",\"Id\":20,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_4\",\"Title\":\"Test user 4\",\"PrincipalType\":1,\"Email\":\"test_4@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10811\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}}]}"
// responseText: "{\"odata.metadata\":\"http://sharepoint2019/_api/$metadata#SP.ApiData.Users1\",\"value\":[{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(4)\",\"odata.editLink\":\"Web/GetUserById(4)\",\"Id\":4,\"IsHiddenInUI\":false,\"LoginName\":\"c:0(.s|true\",\"Title\":\"Everyone\",\"PrincipalType\":4,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":null},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(15)\",\"odata.editLink\":\"Web/GetUserById(15)\",\"Id\":15,\"IsHiddenInUI\":false,\"LoginName\":\"c:0!.s|windows\",\"Title\":\"NT AUTHORITY\\\\authenticated users\",\"PrincipalType\":4,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":null},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(17)\",\"odata.editLink\":\"Web/GetUserById(17)\",\"Id\":17,\"IsHiddenInUI\":false,\"LoginName\":\"NT AUTHORITY\\\\LOCAL SERVICE\",\"Title\":\"NT AUTHORITY\\\\LOCAL SERVICE\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-5-19\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(1)\",\"odata.editLink\":\"Web/GetUserById(1)\",\"Id\":1,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\sp_admin\",\"Title\":\"SP_Admin\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":true,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10775\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(1073741823)\",\"odata.editLink\":\"Web/GetUserById(1073741823)\",\"Id\":1073741823,\"IsHiddenInUI\":false,\"LoginName\":\"SHAREPOINT\\\\system\",\"Title\":\"System Account\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-0-0\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(3)\",\"odata.editLink\":\"Web/GetUserById(3)\",\"Id\":3,\"IsHiddenInUI\":false,\"LoginName\":\"EHC\\\\tempuser\",\"Title\":\"tempuser\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"S-1-5-21-3647675060-2355313432-1628888889-10771\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(8)\",\"odata.editLink\":\"Web/GetUserById(8)\",\"Id\":8,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\tempuser\",\"Title\":\"tempuser\",\"PrincipalType\":1,\"Email\":\"\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":true,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10771\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(18)\",\"odata.editLink\":\"Web/GetUserById(18)\",\"Id\":18,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_1\",\"Title\":\"Test user 1\",\"PrincipalType\":1,\"Email\":\"Test_1@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10810\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(19)\",\"odata.editLink\":\"Web/GetUserById(19)\",\"Id\":19,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_2\",\"Title\":\"Test user 2\",\"PrincipalType\":1,\"Email\":\"Test_2@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10813\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(21)\",\"odata.editLink\":\"Web/GetUserById(21)\",\"Id\":21,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_3\",\"Title\":\"Test user 3\",\"PrincipalType\":1,\"Email\":\"Test_3@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10812\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}},{\"odata.type\":\"SP.User\",\"odata.id\":\"http://sharepoint2019/_api/Web/GetUserById(20)\",\"odata.editLink\":\"Web/GetUserById(20)\",\"Id\":20,\"IsHiddenInUI\":false,\"LoginName\":\"i:0#.w|ehc\\\\test_4\",\"Title\":\"Test user 4\",\"PrincipalType\":1,\"Email\":\"test_4@ehcl.ae\",\"IsEmailAuthenticationGuestUser\":false,\"IsShareByEmailGuestUser\":false,\"IsSiteAdmin\":false,\"UserId\":{\"NameId\":\"s-1-5-21-3647675060-2355313432-1628888889-10811\",\"NameIdIssuer\":\"urn:office:idp:activedirectory\"}}]}"
// responseType: ""
// responseURL: "http://sharepoint2019/_api/web/SiteUsers"
// responseXML: null
// status: 200
// statusText: "OK"
// timeout: 0
// upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
// withCredentials: false
// [[Prototype]]: XMLHttpRequest
// [[Prototype]]: Object







// {result: {…}}
// result:
// odata.metadata: "http://sharepoint2019/_api/$metadata#SP.ApiData.Users1"
// value: Array(11)
// 0: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(4)', odata.editLink: 'Web/GetUserById(4)', Id: 4, IsHiddenInUI: false, …}
// 1: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(15)', odata.editLink: 'Web/GetUserById(15)', Id: 15, IsHiddenInUI: false, …}
// 2: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(17)', odata.editLink: 'Web/GetUserById(17)', Id: 17, IsHiddenInUI: false, …}
// 3: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(1)', odata.editLink: 'Web/GetUserById(1)', Id: 1, IsHiddenInUI: false, …}
// 4: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(1073741823)', odata.editLink: 'Web/GetUserById(1073741823)', Id: 1073741823, IsHiddenInUI: false, …}
// 5: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(3)', odata.editLink: 'Web/GetUserById(3)', Id: 3, IsHiddenInUI: false, …}
// 6: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(8)', odata.editLink: 'Web/GetUserById(8)', Id: 8, IsHiddenInUI: false, …}
// 7: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(18)', odata.editLink: 'Web/GetUserById(18)', Id: 18, IsHiddenInUI: false, …}
// 8: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(19)', odata.editLink: 'Web/GetUserById(19)', Id: 19, IsHiddenInUI: false, …}
// 9: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(21)', odata.editLink: 'Web/GetUserById(21)', Id: 21, IsHiddenInUI: false, …}
// 10: {odata.type: 'SP.User', odata.id: 'http://sharepoint2019/_api/Web/GetUserById(20)', odata.editLink: 'Web/GetUserById(20)', Id: 20, IsHiddenInUI: false, …}
// length: 11
// [[Prototype]]: Array(0)
// [[Prototype]]: Object
// [[Prototype]]: Object
