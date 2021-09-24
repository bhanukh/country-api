import React, {useEffect, useState } from 'react';
import '../component/style.css';

const Home = () => {

    const refreshPage = ()=>{
        window.location.reload();
     }
    
    const [data, setData] = useState([]);
   
    const getCountry = async () => {
        const res = await fetch("http://api.countrylayer.com/v2/region/asia?access_key=666394e6aeea57c58b2a15a3dade9f0d");
        const actualData = await res.json();
        console.log(actualData);
       setData(actualData);
     }
    
     useEffect(() => {
         getCountry();
     }, []);
    return (
           
    
         <>
          <button onClick={refreshPage}>Refresh</button> 

          <h1 className="main">Asian Countries</h1>
        
<table className="table ml-2 mr-5">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Flag</th>
      <th scope="col">Name</th>
      <th scope="col">Capital</th>
      <th scope="col">Regin</th>
      <th scope="col">Calling code</th>
      <th scope="col">Alfa code</th>
      <th scope="col">Language</th>
    </tr>
  </thead>
  
  <tbody>
 

        {
            data.map((curElem, ind) =>{
                return(
                    
                    
                        
                    <tr key={ind}>
                    <td><img src={curElem.flag} alt={curElem.alpha3Code} /></td>
                    <td>  {curElem.name}</td>
                    <td>{curElem.capital}</td>
                    <td>{curElem.region}</td>
                    <td>{curElem.callingCodes}</td>
                    <td>{curElem.alpha2Code}</td>
                    <td>english</td>
                  </tr>
                  
                  
                  
                 
                 
                )
                
    })
     
}

</tbody>



</table>



  </>
  )

}      
         
export default Home;