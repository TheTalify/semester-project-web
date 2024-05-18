import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cross.png'
export const CartItems = () => {
    const {all_products, cartItems, removeFromCart} = useContext{ShopContext};
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>                <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(cartItems[e.id]>0)
                {
                    return <div>
                    <div className='cartitems-format'>
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>Rs. {e.new_price}</p>
                        <button className='cartitems-qunatity'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                }
        })}
    </div>
  )
}
