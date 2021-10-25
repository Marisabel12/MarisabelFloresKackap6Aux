import React, { useState, useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar';

 function App () {
   const [people, setPeople] = useState([]);
   useEffect(() => {
     async function fetchPeople(){
         let res = await fetch('https://swapi.dev/api/people/1/');
         let data = await res.json();
         setPeople(data.results);
     }
     fetchPeople();
}, [])
console.log('people', people);
return (
      <>
        <NavBar data={people} />
        
      </>
    )
  
}

export default App;

