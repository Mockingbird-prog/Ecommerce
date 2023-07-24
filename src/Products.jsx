import React, { useEffect, useState } from 'react';
/*import pic2 from "./assets/pic2.png";*/
const Hero = () => {
  const [users,setUsers] = useState([]);
  const getUsers = async() => {
    const response = await fetch('https://fakestoreapi.com/products');

setUsers (await response.json());

  }
  useEffect(() => {
    getUsers ();
  }, [] )  ;
  
  return (
 <div className='mt-5 container-fluid'>
<div className='row'>
          {
       users.map((currentElement) => {
            return (
          
            <div className='flex grid-flow-col col-span-7 col-4'>
          
  <div className='p-2 text-centre align-items-center'>
<div className="duration-150 card hover:scale-110 " >
<h2 className="card-title">{currentElement.title}</h2>
<span> 
  <h6>{currentElement.id}</h6>
</span>
  <img className="relative w-48 card-img-top " src={currentElement.image} alt="Card image cap"/>
  <div> <span>
  {currentElement.products}  </span></div>
  <div className="card-body">
  <div className='w-24 h-6 px-1 py-1 mt-2 text-xs text-center text-white bg-red-800 hover:scale-110 duration-120 ml-'>
      <span>{currentElement.price} </span>
      </div>
    <p className="text-xs card-text mt-7" >{currentElement.description}<br/>
    <a className=''  href='/' >more details</a></p>
   
    
    <a href="./cart" className="w-32 btn btn-primary ">Add to cart</a> 
    </div>
    
    
    </div>
    </div>
         </div>   
        
            )
               })    
            
             } 
</div>
</div>
  
  ) }


export default Hero;
