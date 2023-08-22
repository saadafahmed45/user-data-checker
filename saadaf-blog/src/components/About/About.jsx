import React from 'react';
import aboutPic from '../../images/aboutPic.png'


const About = () => {
   return (
      <section className="about_header">
         <h1>About</h1>
         <div className="about_section">
            <div className="about_img">
               <img src={aboutPic} alt="" />
               <h1>about Img</h1>

            </div>
            <div className="about_content">
               <h2>Mohammad Haolader</h2>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, odio? Suscipit voluptatibus delectus consequuntur error optio obcaecati consequatur doloremque, ipsa saepe velit, natus deserunt quo voluptas odio eveniet cumque reprehenderit.
            </div>
         </div>

      </section>
   );
};

export default About;