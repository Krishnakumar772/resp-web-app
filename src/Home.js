import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div>
        <div className="home">
            <div className="home_container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" 
                alt="" className="home__image" />

                <div className="home__row">
                <Product 
                id="123"
                    title="Bennett mystick 15.6 inch Laptop Shoulder Messenger Shilng Office Bag,water
                    repellent Fabric for Men and women (Blue)"
                    price={12.90}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                />
                <Product 
                     id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                />
              </div>
                <div className="home__row">
                <Product 
                     id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                />
                <Product 
                      id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />

                </div>
                <div className="home__row">
                <Product
                
                id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                 <Product
                
                id="90829"
                        title="Dell LC49RG90SSUXEN 49' Curved Laptop Gaming Monitor - Silver (4th Generation)"
                        price={2094.98}
                        rating={4}
                        image="https://www.mytechsense.com.au/wp-content/uploads/2020/10/57d3015c0ae4c7fb738b7cd2c12e77496e8badd5.jpg"
                />
                

                </div>
            </div>

        </div>
        </div>
    )
}

export default Home
