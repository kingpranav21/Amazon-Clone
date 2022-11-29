import React from 'react'
import "./Home.css"
import Product from "./Product";
function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
            <img className='Home__image'src="https://m.media-amazon.com/images/I/71MNCnL6ShL._SX3000_.jpg"/>

        
    
        <div className='Home__row'>
         <Product 
         id="000001"
         title='The Lean Startup : How Constant Innovation Creates Radically Successful Businesses Paperback' price={12.45} image=
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5}/>

        <Product id="000004"
         title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) :
         ' price={1099} 
         image=
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
        rating={5}/>
        

        </div>
        <div className='Home__row'>
        <Product id="000003"
         title='iPhone 14 Pro - Purple :
         From $999 or $41.62/mo.per month for 24 mo.months before trade' price={999} 
         image=
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578" 
        rating={5}/>
         <Product
         id="000005"
         title='Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price={267.45} 
         image=
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" 
        rating={3}/>
         <Product id="000006"
         title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' price={99.95} 
         image=
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
        rating={4}/>
         
        </div>
        <div className='Home__row'>
        <Product id="000009"
         title='Apple MacBook Pro 14 2021 (M1, 14.2 inch, 16GB, 1TB, Space Grey)' price={2599} 
         image=
        "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663348542/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_0_l5bk1y.png/mxw_2256,f_auto" 
        rating={5}/>
        <Product id="000010"
         title='Air Trainer 1
         Tokyo 03' price={669} 
         image=
        "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/7b2143cc-7258-475e-aaa0-a986c52d52d7/jordan-nu-retro-1-fresh-ink-fb1300-100-release-date.jpg" 
        rating={5}/>

<Product id="000010"
         title='Jordan Nu Retro 1
         Fresh Ink' price={599} 
         image=
        "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9d8155d2-bcb9-4530-ac3c-fe5ec28414ea/air-trainer-1-tokyo-03-dz4867-010-release-date.jpg" 
        rating={4}/>
        

        </div>
        <div className='Home__row'>
        <Product
         id="000002"
         title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor' price={300.45} 
         image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        rating={4}/>
        
        </div>
        </div>

    </div>
  
  )
}

export default Home