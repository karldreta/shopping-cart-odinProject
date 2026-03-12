import '../styles/HomePage.css';
import tshirtIcon from "../assets/tshirt-men.svg";
import dressIcon from "../assets/dress-women.svg";
import giftIcon from "../assets/gift.svg";
import shoeIcon from "../assets/shoes.svg";
import bagIcon from "../assets/bag.svg";
import glassesIcon from "../assets/glasses.svg";
import watchIcon from "../assets/watch.svg";
import perfumeIcon from "../assets/perfume.svg";





const HomePage = () => {


    return (
        <main>
            <section id="HeroSection">
                <h1>You've reached a Checkpoint.</h1>
                <p>
                Take a moment to explore what we have in store. From everyday clothing to practical accessories and personal essentials, our collection is designed to fit your daily routine. Whether you're refreshing your wardrobe or picking up something simple for the day ahead, you'll find pieces that combine comfort, style, and usefulness. Take your time, browse around, and discover something that suits you.
                </p>
                <h3><a href="/">Check out Shop</a></h3>
            </section> 
            <section id="CategoriesSection">
                <h3>Browse by Category</h3>
                <ul>
                    <li>
                        <a href="#">
                        <div className='iconWrapper'>
                            <img src={tshirtIcon} alt="Men's Clothing" />
                        </div>
                        </a>
                        <span>Men's</span>
                    </li>
                    <li> 
                        <a href="#">
                        <div className='iconWrapper'>
                            <img src={dressIcon} alt="Women's Clothing" />   
                        </div>
                        </a>
                        <span>Women's</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={shoeIcon} alt="Shoes" />      
                            </div>
                        </a>
                            <span>Shoes</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={bagIcon} alt="Bags" />      
                            </div>
                        </a>
                            <span>Bags</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={glassesIcon} alt="Glasses" />      
                            </div>
                        </a>
                            <span>Glasses</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={watchIcon} alt="Watches" />      
                            </div>
                        </a>
                            <span>Watches</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={perfumeIcon} alt="Fragrances" />      
                            </div>
                        </a>
                            <span>Fragrances</span>
                    </li>
                    <li>
                        <a href="#">
                            <div className='iconWrapper'>
                            <img src={giftIcon} alt="Essentials" />      
                            </div>
                        </a>
                            <span>Everything else</span>
                    </li>
                </ul>
            </section>

        </main>
    )
}

export default HomePage