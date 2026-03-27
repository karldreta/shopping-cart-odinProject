import { useOutletContext } from "react-router"
import '../styles/Cart.css'




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
                    totalPrice={item.totalPrice}
                    productQuantity={item.productQuantity}
                    />
                    
                
                ) 
                }
            </main>
        </>
    )

}


const CartItem = ({productImage, productName, productQuantity, totalPrice}) => {    
    return (
    <div className="cartItemContainer">
        <div className="imageContainer">
            <img src={productImage}/>
        </div>
        <p>{productName}</p>
        <p>{"x" + productQuantity}</p>
        <p>{"$" + totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</p>
    </div>
    )
}


export default Cart