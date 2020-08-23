import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
            src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpghttps://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
            alt=""
            />
            {/* Product  id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id = "12341341"
                    title= "Weathering With You"
                    price = {19.99}
                    rating= {5}
                    image ="https://m.media-amazon.com/images/I/51QGbsbqKNL._AC_SL260_.jpg"
                />
                <Product
                    id = "12341341"
                    title= "Kimi No Na Wa"
                    price = {49.99}
                    rating= {5}
                    image ="https://m.media-amazon.com/images/I/91PiMHRTXXL._AC_UL320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id = "12341341"
                    title= "Echo Dot (3rd Gen) with Clock and Amazon Smart Plug - Sandstone"
                    price = {19.99}
                    rating= {4}
                    image ="https://m.media-amazon.com/images/I/51HWDb-OF1L._AC_UY218_.jpg"
                />
                <Product
                    id = "12341341"
                    title= "Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor"
                    price = {179.99}
                    rating= {5}
                    image ="https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg"
                />
                <Product
                    id = "12341341"
                    title= "Apple iPad Pro (128GB, Wi-Fi, Space Gray) 12.9in Tablet (Renewed)"
                    price = {379.99}
                    rating= {3}
                    image ="https://m.media-amazon.com/images/I/51EZ13kZpTL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "12341341"
                    title= "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price = {29.99}
                    rating= {2}
                    image ="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
            </div>
        </div>
    );
}

export default Home
