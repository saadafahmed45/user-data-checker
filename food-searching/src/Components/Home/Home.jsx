import React from 'react';

const Home = ({ data }) => {
   console.log(data.length);
   return (
      <>
         <section>
            <div className="box">
               <div className="list__main">
                  {
                     data?.slice(0, 10).map(user => (
                        <ul key={user?.id}>

                           <li >{user.name}</li>
                           <h3>{user?.title}</h3>
                        </ul>
                     ))
                  }
               </div>
            </div>

         </section>


      </>
   );
};

export default Home;