// import { useState } from 'react'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'


const Shop = () => {
  const { shopProducts, error, loading  } = useProductURL();
  // console.log(shopProducts[0]);
  // shopProducts.map(product => 
  //   console.log({productName: product.title, productImage:product.images[0], productDescription:product.description  })
    
  // );

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  
  return (
    <main id='shop'>
      {
      shopProducts.map(product => <Product key={product.id} productName={product.title} productImage={product.images[0]} productDescription={product.description}/>)
      }
    </main>
  )
}



const Product = ({productName, productImage, productDescription}) => {

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
