import React from 'react';
 function List(){
   let menu =['Home', 'contact', 'About', 'facebook', 'login']
     return (
         <>
         <h1>Functional Components</h1>
       <ol>
        <li>{menu[0]}</li>
        <li>{menu[1]}</li>
         <li>{menu[2]}</li>
         <li>{menu[3]}</li>
        <li>{menu[4]}</li>
       </ol>
     </>   
     
     );
 }

export default List;

