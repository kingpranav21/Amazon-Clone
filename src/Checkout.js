import React from 'react';
import Subtotal from './Subtotal';
import "./Checkout.css";
import { BsBasket } from 'react-icons/bs';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const[{basket},dispatch] =useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className="checkout__ad" 
            src="https://assets.mspimages.in/wp-content/uploads/2021/07/amazon-prime-youth-offer.jpg"/>
           
       
            <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item =>(
              <CheckoutProduct
            
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
           
              />
             ))}
      

           </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>

  );
}

export default Checkout