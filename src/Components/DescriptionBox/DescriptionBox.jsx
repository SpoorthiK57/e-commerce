import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitate buying and selling of products or 
                services over the internet. This serves as a virtual marketplace where businesses and individuals 
                showcase their products, interact with customers, and conduct transactions without need for a 
                physical presence. E-commerce websites have gained immense popularity due to their conveninet 
                accessibility and the global reach they offer.
            </p>
            <p>
               E-commerce website typically displays the products or services along with detailed descriptions, 
               images, prices and any available variations(e.g, sizes, colors). Each product usually has its own 
               dedicate page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox