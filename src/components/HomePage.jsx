import '../styles/HomePage.css';

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
                        <a href="#"></a>
                        <div className='iconWrapper'>

                        </div>
                        <span>Men's</span>
                    </li>
                    <li> 
                        <a href="#"></a>
                        <div className='iconWrapper'>   
                        </div>
                        <span>Women's</span>
                    </li>
                    <li>
                    <a href="#"></a>
                        <div className='iconWrapper'>   
                        </div>
                        <span>Everything else</span>
                    </li>
                </ul>
            </section>

        </main>
    )
}

export default HomePage