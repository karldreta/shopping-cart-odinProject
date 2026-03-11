// import { useState } from 'react'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'



const Product = () => {
  const { productName, productImage, productDescription, error, loading  } = useProductURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>{productName}</h1>
      <img src={productImage} alt={"placeholder text"} />
      <h2>{productDescription}</h2>
    </>
  );
};

export default Product
