import { useState } from 'react'


const Product = ({productID, productName, productImage, productPrice, addToCart}) => {
    const [productQuantity, setProductQuantity] = useState(1);
  
    return (
      <>
      <div className="productDiv">
        <p className='productName'>{productName}</p>
        <div className='productImageContainer'>
          <img src={productImage} alt={"placeholder text"} />
        </div>
        <p className='productPrice'>{"$" + productPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}</p>
        <div className="selectQuantityContainer">
        <input  className='productQuantity'
                type="text"
                placeholder='1 - 10'
                pattern="[0-9]*" 
                inputMode="numeric" 
                value={productQuantity}
                min="1" 
                max="10" 
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setProductQuantity("");
                    return;
                  }
                  if (!/^\d+$/.test(value)) return;
                  const num = Number(value);
                  if (num > 10) return;
                  setProductQuantity(num);
                }}/>
          <button className="increase" onClick={() => productQuantity < 10 ? setProductQuantity(productQuantity + 1) : productQuantity}>+</button>
          <button className="decrease" onClick={() => productQuantity > 1 ? setProductQuantity(productQuantity - 1) : productQuantity}>-</button>
        </div>
        <button className="addToCart" onClick={() => addToCart({productID, productName, productImage, productQuantity, productPrice})}>Add to Cart</button>
      </div>
      </>
    );
  };

export {Product}