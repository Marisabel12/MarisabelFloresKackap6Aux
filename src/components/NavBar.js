import React from 'react';

export default function NavBar(data) {
    return (
        <>
           <h1>start wars</h1> 
           <table>
           <thead>
            <tr>
           <th>Titulo</th>
           <th>Parrafo</th>
           <th>Fecha</th>
           </tr> 
               <tr>
                   {data.map((people, i)=>{
                       <li key={i}>
                           <th>{people.Height}</th>
                           <th>{people.mass}</th>
                           <th>{people.hair_color}</th>
                       </li>
                       })}
           </tr>
           </thead>
           </table>
        </>
    )
}
