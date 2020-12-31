import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
                alt=""
                />
                <div className="home__row">
                    <Product
                        id="123456789"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={3}
                    />
                    <Product
                        id="90876453"
                        title="Kenwood KM020 Titanium Major Stand Mixer 220-240 Volt/ 50-60Hz INTERNATIONAL VOLTAGE & PLUG FOR OVERSEAS USE ONLY WILL NOT WORK IN THE US"
                        price={299.99}
                        image="https://www.costco.co.uk/medias/sys_master/images/h5d/hd2/31246443118622.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="192827364"
                        title="New Apple Watch SE (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
                        price={299.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLEUIeBtB3lYe4BMfR8Oz9BNoFAK0gBkrFg&usqp=CAU"
                        rating={3}
                    />
                    <Product
                        id="19235478"
                        title="TCL 55 inch 5-Series 4K UHD Dolby Vision HDR QLED ROKU Smart TV - 55S535"
                        price={359.99}
                        image="https://www.ubuy.co.th/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzkxdE1OQVdXc1BMLl9TUzQwMF8uanBn.jpg"
                        rating={5}
                    />
                    <Product
                        id="18724465"
                        title="Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Space Gray "
                        price={1899.99}
                        image="https://m.media-amazon.com/images/I/71HI3U9ZwZL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="10909087"
                        title="Xbox One S Two Controller Bundle (1TB) Includes Xbox One S, Extra Wireless Controller, 3-Month Game Pass Trial, 14-day Xbox Live Gold Trial"
                        price={699.99}
                        image="https://i.pcmag.com/imagery/reviews/05bD4wjFmiTwMPe7VmDIgsi-6.1569473383.fit_scale.size_1969x1108.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
