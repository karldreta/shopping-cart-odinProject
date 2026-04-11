import { useOutletContext } from "react-router"
import CartItem from "./CartItem";
import '../styles/Cart.css'



const Cart = () => {
    const { cartItems } = useOutletContext();
    console.log(cartItems);
    
    
    return (
        <>
            <h4>Shopping Cart</h4>
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

export default Cart