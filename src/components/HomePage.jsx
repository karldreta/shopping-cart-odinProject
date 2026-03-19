import { Link } from "react-router";
import tshirtIcon from "../assets/tshirt-men.svg";
import dressIcon from "../assets/dress-women.svg";
import giftIcon from "../assets/gift.svg";
import shoeIcon from "../assets/shoes.svg";
import bagIcon from "../assets/bag.svg";
import glassesIcon from "../assets/glasses.svg";
import watchIcon from "../assets/watch.svg";
import perfumeIcon from "../assets/perfume.svg";
import '../styles/HomePage.css';





const HomePage = () => {
    return (
        <main>
            <section id="HeroSection">
                <h1>You've reached a Checkpoint.</h1>
                <p>
                Take a moment to explore what we have in store. From everyday clothing to practical accessories and personal essentials, our collection is designed to fit your daily routine. Whether you're refreshing your wardrobe or picking up something simple for the day ahead, you'll find pieces that combine comfort, style, and usefulness. Take your time, browse around, and discover something that suits you.
                </p>
                <h3>
                    <Link to="product">Check out Shop</Link>
                </h3>
            </section> 
            <section id="CategoriesSection">
                <h3>Browse by Category</h3>
                <ul>
                    <li>
                        <Link to="/product?category=mens">
                        <div className='iconWrapper'>
                            <img src={tshirtIcon} alt="Men's Clothing" />
                        </div>
                        </Link>
                        <span>Men's</span>
                    </li>
                    <li> 
                        <Link to="/product?category=womens">
                        <div className='iconWrapper'>
                            <img src={dressIcon} alt="Women's Clothing" />   
                        </div>
                        </Link>
                        <span>Women's</span>
                    </li>
                    <li>
                        <Link to="/product?category=shoes">
                            <div className='iconWrapper'>
                            <img src={shoeIcon} alt="Shoes" />      
                            </div>
                        </Link>
                            <span>Shoes</span>
                    </li>
                    <li>
                        <Link to="/product?category=bags">
                            <div className='iconWrapper'>
                            <img src={bagIcon} alt="Bags" />      
                            </div>
                        </Link>
                            <span>Bags</span>
                    </li>
                    <li>
                        <Link to="/product?category=glasses">
                            <div className='iconWrapper'>
                            <img src={glassesIcon} alt="Glasses" />      
                            </div>
                        </Link>
                            <span>Glasses</span>
                    </li>
                    <li>
                        <Link to="/product?category=watches">
                            <div className='iconWrapper'>
                            <img src={watchIcon} alt="Watches" />      
                            </div>
                        </Link>
                            <span>Watches</span>
                    </li>
                    <li>
                        <Link to="/product?category=fragrances">
                            <div className='iconWrapper'>
                            <img src={perfumeIcon} alt="Fragrances" />      
                            </div>
                        </Link>
                            <span>Fragrances</span>
                    </li>
                    <li>
                        <Link to="/product?category=everything">
                            <div className='iconWrapper'>
                            <img src={giftIcon} alt="everything" />      
                            </div>
                        </Link>
                            <span>Everything</span>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default HomePage