import { useState } from "react";
import '../styles/Cart.css'



const CartItem = ({productImage, productName, productQuantity, productPrice}) => {    
    const [cartItemQuantity, setCartItemQuantity] = useState(productQuantity)
    const cartItemTotal = cartItemQuantity * productPrice;

    function handleQuantityChange (operation) {        
        if (operation === "increase" && cartItemQuantity < 10) {
            setCartItemQuantity(cartItemQuantity + 1);            
        } else if (operation === "decrease" && cartItemQuantity > 0) {
            setCartItemQuantity(cartItemQuantity - 1);
        }
    }

    return (
    <div className="cartItemContainer">
        <div className="imageContainer">
            <img src={productImage}/>
        </div>
        <p>{productName}</p>
       <div className="inputContainer">
       <button className="decreaseCartItemQ" onClick={() => handleQuantityChange("decrease")}>-</button>
        <input  type="text"
              placeholder='1 - 10'
              pattern="[0-9]*" 
              inputMode="numeric" 
              value={cartItemQuantity}
              min="1" 
              max="10" 
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                    setCartItemQuantity("");
                  return;
                }
                if (!/^\d+$/.test(value)) return;
                const num = Number(value);
                if (num > 10) return;
                setCartItemQuantity(num);
              }}/>
        <button className="increaseCartItemQ" onClick={() => handleQuantityChange("increase")}>+</button>
       </div>
        <p className="price">{"$" + cartItemTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</p>
    </div>
    )
}

export default CartItem