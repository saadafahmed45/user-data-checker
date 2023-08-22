import React from 'react';
import Navbar from '../Navbar/Navbar';
import headerPic from '../../images/headerpic.png'

const Header = () => {



   return (
      <div >
         <Navbar />
         <header >
            <div className="header_content container">
               <h1>This is saad-af Ahmed blog amet consectetur adipisicing elit</h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit neque aperiam nobis accusantium qui atque esse officiis in harum ex.</p>
               <div className="header_btn">
                  <a href="">Read More..</a>
               </div>
            </div>

            <div className="header_image">
               <img src={headerPic} alt="" />
            </div>

         </header>


      </div>
   );
};

export default Header;