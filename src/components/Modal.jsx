import React from 'react';
import './Modal.scss'

function Modal(props) {
    return (
      <div className="modal-wrap">
        <div className='modal-item'>
          <div className='title'>
            <img src="./image/modal-checkout.svg" alt="checkout" />
            <h2>Checkout</h2>
          </div>
          <div className='inputs'>
            <div className='block'>
              <img src="./image/modal-smile.svg" alt="smile" />
              <div>
                <label>Your Name</label>
                <input type="text" placeholder="Jerome Porter"/>
              </div>
            </div>
            <div className='block'>
              <img src="./image/modal-phone.svg" alt="phone" />
              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="(433) 577-1343"/>
              </div>
            </div>
            <div className='block'>
              <img src="./image/modal-map.svg" alt="map" />
              <div>
                <label>Shipping Addres</label>
                <input type="text" placeholder="1038 Cinder Berry Turnabout"/>
              </div>
            </div>
            <div className='block'>
              <img src="" alt="" />
              <div>
                <label>Time to Delivery</label>
                <input type="text" placeholder="3:00 PM"/>
              </div>
            </div>
        </div>
        <div className='order-btn'>
            <button onClick={props.onClickCart}>Cancel</button>
            <button onClick={props.onClickCart} className='active'>Cheackout</button>
        </div>
        </div>
      </div>
  );
}
  
  export default Modal;