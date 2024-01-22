import React, { useEffect, useState } from 'react';
import './App.css';

export default function Shop() {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setData(data))
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

  return (
    <>
      <div className='shop-heading'>
        <h1>Vinyls</h1>
        <h3>Sort:</h3>
        <button onClick={() => handleSort('A-Z')}>A-Z</button>
        <button onClick={() => handleSort('PriceLowToHigh')}>Price Low to High</button>
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





