import { Link } from "react-router";
import '../styles/HomePage.css';
import { linkIcons } from "./HomePageIcons";




const HomePage = () => {

    const CategoryItem  = ({name, to, img, alt}) => {        
        return (
            <li key={name}>
                <Link to={to}>
                <div className='iconWrapper'>
                    <img src={img} alt={alt} />
                </div>
                </Link>
                <span>{name}</span>
            </li>
            );
    }
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
                    {linkIcons.map(linkIcon => CategoryItem(linkIcon))}
                </ul>
            </section>
        </main>
    )
}

export default HomePage