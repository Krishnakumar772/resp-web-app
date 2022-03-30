import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,image,rating,price,title}) {
    const [{basket},dispatch]=useStateValue();
    
    const removeToBasket = () => {
        dispatch({
            type:"Remove_To_Basket",
            id:id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="Product__info">
                <p className="checkoutProduct__title">{title}
                    </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                        { Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                            ))
                        }
             </div>
                <button onClick={removeToBasket}>Remove from Basket</button>

            </div>

        </div>
    )
}

export default CheckoutProduct
