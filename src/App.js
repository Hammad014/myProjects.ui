import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Box from "./components/Box";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import "./components/Box.css";

function App() {

  // const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  console.log(data,"-----data");

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.results)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  let [pageNumber, updatePageNumber] = useState(1);
let [search, setSearch] = useState("");

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const result=data.map((item)=>{
    return (
       <Box
    id={item.id}
    image={item.image}
    Name={item.name}
    status={item.status}
    gender={item.gender}
    origin={item.origin.name}
    species={item.species}
    />
     )
   })
  

  return (
    <>  
    <h1 className="text-center mb-3">Characters</h1>
  <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
     {result} 
     {/* <Paging info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber}/> */}
    </>
  );
}

export default App;


// import React, { useState, useEffect } from 'react'
// export default function Country() {
//   const [countryItems, initCountry] = useState([])
//   const fetchData = async () => {
//     const response = await fetch('https://restcountries.com/v3.1/all')
//     if (!response.ok) {
//       throw new Error('Data coud not be fetched!')
//     } else {
//       return response.json()
//     }
//   }
//   useEffect(() => {
//     fetchData()
//       .then((res) => {
//         initCountry(res)
//       })
//       .catch((e) => {
//         console.log(e.message)
//       })
//   }, [])
//   return (
//     <div className="row">
//       <h2 className="mb-3">React HTTP Reqeust with Async Await Example</h2>
//       {countryItems.map((item, idx) => {
//         return (
//           <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={idx}>
//             <div className="card h-100">
//               <div className="img-block">
//                 <img
//                   src={item.flags.svg}
//                   className="card-img-top"
//                   alt={item.name.common}
//                 />
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">{item.name.common}</h5>
//               </div>
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <strong>Capital:</strong> {item.capital}
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Population:</strong> {item.population}
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Continent:</strong> {item.continents[0]}
//                 </li>
//               </ul>
//               <div className="card-body">
//                 <div className="d-grid">
//                   <a
//                     className="btn btn-dark"
//                     href="{item.maps.googleMaps}"
//                     target="_blank"
//                   >
//                     View Map
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }