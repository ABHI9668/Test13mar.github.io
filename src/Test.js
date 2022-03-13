import React,{useEffect, useState} from 'react'
import "./index.css";

 const Test=()=> {
       const [first, setfirst] = useState([])
   useEffect(()=>{fetch("https://fakestoreapi.com/products").then((res)=>{
        return res.json();
    }).then((data)=>{
    //   console.log(data);
         setfirst(data);
       
   })},[])
  return (
    <>
    <h2>Fake Store</h2>
    {
        
      first.map((value,index)=>{
        return(
            <div className='maindiv' key={index}>
        <img src={value.image}/><br/>
          <h3>category={value.category}</h3><br/>
          <h3>price={value.price}</h3>
          <hr/>
        
        </div>);
      })

      
    }

    </>
  )
}
export default Test;