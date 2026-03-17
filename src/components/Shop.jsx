// import { useState } from 'react'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'


const Shop = () => {
  return (
    <main>
      <Product/>
      <Product />
    </main>
  )
}



const Product = () => {
  const { productName, productImage, productDescription, error, loading  } = useProductURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
    <div className="productDiv">
      <p className='productName'>{productName}</p>
      <div className='productImageContainer'>
        <img src={productImage} alt={"placeholder text"} />

      </div>
      <p className='productDescription'>{productDescription}</p>
    </div>
    </>
  );
};

export default Shop
