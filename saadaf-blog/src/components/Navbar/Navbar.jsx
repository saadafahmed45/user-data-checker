import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

   // const [open, setOpen] = useState(false)





   const navLinks = [
      {
         name: 'Home', path: '/home',
      },
      {
         name: 'About', path: '/home',
      },
      {
         name: 'blog', path: '/home',
      },
      {
         name: 'contact', path: '/home',
      },

   ]

   return (
      <div>
         <nav>
            <div className="logo">
               Saad-Af
            </div>
            <ul>
               {
                  navLinks.map((navLink) => (
                     <li><a href="">{navLink.name}</a></li>
                  ))
               }

            </ul>

            {/* 
            <div className="navButton" onClick={() => setOpen(!open)}>
               {
                  open ? <AiOutlineClose /> : <FaBars />
               }




            </div> */}
         </nav>


      </div>
   );
};

export default Navbar;