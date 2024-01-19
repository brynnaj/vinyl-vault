import React, { useEffect, useState } from 'react';
import './App.css';

export default function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
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
  );
}





