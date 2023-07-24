import React from 'react'
import { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links= [
      {
        id: 1,
        link: 'home'
      },
      {
        id: 2,
        link: 'about'
      },
      {
        id: 3,
        link: 'Products'
      },
      {
        id: 4,
        link: 'contacts'
      }
    ];
  return (
  <div className=''>
    
    
  <div  className="container-fluid ">
   <div  className="w-full h-24 text-white bg-black navbar">
  <div  className="container-fluid">
    <a  className="navbar-brand ">Online Store</a>
   
 
   
    <ul className='hidden md:flex'>
 
 
 {links.map(({id, link}) => (
<li 
key ={id}
className='float-left p-4 py-4 ml-0 text-sm font-bold text-left text-white capitalize duration-100 cursor-pointer hover:scale-110'>
 <Link to={link} smooth duration={500}> {link} </Link>
  </li>
  ))}
 </ul>
 </div>
 <div 
 onClick={() => setNav(!nav)}
 className= "z-10 pr-4 text-white cursor-pointer md:hidden">
 {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
 </div>
{nav && (

<ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen '>
  {links.map(({id, link}) => (
<li 
key ={id}
className='px-4 py-6 text-xs capitalize cursor-pointer'>
 <Link onClick={()=> setNav(!nav) } 
 to={link} smooth duration={500}> {link} </Link>
  </li>
  ))}
  </ul>
 
 )}
 
</div>
  </div>
 </div>
  )
};

export default Navbar;
