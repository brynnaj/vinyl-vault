// import React, { useEffect, useState } from 'react';
// import './App.css';

// export default function Shop() {
//   const [data, setData] = useState([]);
//   const [sortOption, setSortOption] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/products")
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleSort = (option) => {
//     let sortedData = [...data];

//     if (option === 'A-Z') {
//       sortedData.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (option === 'PriceLowToHigh') {
//       sortedData.sort((a, b) => a.price - b.price);
//     }

//     setData(sortedData);
//     setSortOption(option);
//   };

//   return (
//     <>
//       <div className='shop-heading' style={{marginLeft: '10px'}}>
//         <h1>Vinyls</h1>
//         <h3>Sort:</h3>
//         <button style={{ marginRight: '10px' }} onClick={() => handleSort('A-Z')}>A-Z</button>
//         <button  onClick={() => handleSort('PriceLowToHigh')}>Price Low to High</button>
//         <h3>Filter:</h3>
//         <button>Hip-Hop</button>
//         <button>R&B</button>
//       </div>
//       <div className='product-container'>
//         {data.map((product) => (
//           <div key={product.id} className='product'>
//             <img src={product.image_url} alt={product.name} width="463px" height="748px" />
//             <div className='product-details'>
//               <p className='product-title'>{product.name}</p>
//               <p className='product-artist'>{product.artist}</p>
//               <p className='product-description'>{product.description}</p>
//               <p className='product-price'>{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
import './App.css';

export default function Shop() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [hipHopFilter, setHipHopFilter] = useState(false);
  const [rbFilter, setRbFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => {
        setOriginalData(data);
        setData(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSort = (option) => {
    let sortedData = [...data];

    if (option === 'A-Z') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'PriceLowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    }

    setData(sortedData);
    setSortOption(option);
  };

  const handleFilter = (genreId) => {
    let filteredData = originalData; // Use the original data for filtering

    if (genreId === 1) {
      filteredData = originalData.filter(product => product.genre_id === 1);
      setHipHopFilter(true);
      setRbFilter(false);
    } else if (genreId === 2) {
      filteredData = originalData.filter(product => product.genre_id === 2);
      setHipHopFilter(false);
      setRbFilter(true);
    } else {
      // Reset filters
      setHipHopFilter(false);
      setRbFilter(false);
    }

    setData(filteredData);
  };

  return (
    <>
      <div className='shop-heading' style={{ marginLeft: '10px' }}>
        <h1>Vinyls</h1>
        <h3>Sort:</h3>
        <button style={{ marginRight: '10px' }} onClick={() => handleSort('A-Z')}>A-Z</button>
        <button onClick={() => handleSort('PriceLowToHigh')}>Price Low to High</button>
        <h3>Filter:</h3>
        <button  style={{ marginRight: '10px' }} className={hipHopFilter ? 'active' : ''} onClick={() => handleFilter(2)}>Hip-Hop</button>
        <button style={{ marginRight: '10px' }} className={rbFilter ? 'active' : ''} onClick={() => handleFilter(1)}>R&B</button>
        <button onClick={() => handleFilter(null)}>Clear Filters</button>
      </div>
      <div className='product-container'>
        {data.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.image_url} alt={product.name} width="463px" height="748px" />
            <div className='product-details'>
              <p className='product-title'>{product.name}</p>
              <p className='product-artist'>{product.artist}</p>
              <p className='product-description'>{product.description}</p>
              <p className='product-price'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}





