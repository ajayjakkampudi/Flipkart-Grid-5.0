import React from 'react'
import './orderItem.css'
import { Link, Navigate } from 'react-router-dom'

export default function OrderItem({item}) {
  // const targetDiv=document.getElementsByClassName('order-result-check')
  // if (item.status === 'Delivered') {
  //   targetDiv.classList.add('delivered');
  // } else if (item.status === 'Shipped') {
  //   targetDiv.classList.add('shipped');
  // } else if (item.status === 'Cancelled') {
  //   targetDiv.classList.add('cancelled');
  // }

  return (
    <div className="order-result-item">
      <img
        src={item.imgUrl}
        alt=""
        className="order-result-img"
      />
      <div className="order-result-item-desc">
        <h1 className="order-result-title">{item.productName}</h1>
        <span className="order-result-distance">Category: {item.category} from center</span>
        <span className="order-result-features">
          {item.description}
        </span>
        <span className="order-result-cancel-subtitle">
          Quantity: {item.quantity}
        </span>
      </div>
      <div className="order-result-item-details">
        {item.rating?(<div className="order-result-rating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>):<></>}
        <div className="order-result-item-detailtexts">
          <span className="order-result-price">Rs {item.price}</span>
          <span className="order-result-tax">Includes taxes and fees</span>
          <span className={`order-result-check ${item.status}`}>{item.status}</span>
        </div>
      </div>
    </div>
  )
}
