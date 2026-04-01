import { useOutletContext } from "react-router"
import '../styles/Cart.css'
import { useState } from "react";




const Cart = () => {
    const { cartItems } = useOutletContext();
    console.log(cartItems);
    
    
    return (
        <>
            <h4>ShoppingCart</h4>
            <main id="shoppingCart">
                {
                   cartItems.map(item => <CartItem 
                    key={item.productID} 
                    productID={item.productID} 
                    productImage={item.productImage} 
                    productName={item.productName} 
                    productPrice = {item.productPrice}
                    productQuantity={item.productQuantity}
                    />
                ) 
                }
            </main>
        </>
    )

}


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
        <button className="increaseCartItemQ" onClick={() => handleQuantityChange("increase")}>+</button>
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
        <button className="decreaseCartItemQ" onClick={() => handleQuantityChange("decrease")}>-</button>
        <p>{"$" + cartItemTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</p>
    </div>
    )
}


export default Cart