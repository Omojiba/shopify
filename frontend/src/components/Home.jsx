import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';
import "./styles/home.css"

function Home() {
const { data, error, isLoading} = useGetAllProductsQuery();
const dispatch = useDispatch();
const handleAddToCart = (product) =>{
  dispatch(addToCart(product));

}
  return (
    <div className='home-container'>
  { isLoading ? <p>Loading...</p> : error ? <p>An error occurred</p> : 
  <>
  <h2 className='heading'>New Arrivals</h2>
  <div className="products">
    {data?.map(product => 
      <div className='product' key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.image}/>
        <div className="details">
          <p className='description'>{product.desc}</p>
          <p className='price'>₦{product.price.toLocaleString()}</p>
        </div>

        <button className='ripple' onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>)}
  </div>
  </>}
    </div>
  )
}

export default Home