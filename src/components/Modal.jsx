import React from 'react';
import './Modal.scss';
import title from "../assets/image/modal-checkout.svg";
import smile from "../assets/image/modal-smile.svg";
import phone from "../assets/image/modal-phone.svg";
import map from "../assets/image/modal-map.svg";


function Modal(props) {
    return (
      <div className="modal-wrap">
        <div className='modal-item'>
          <div className='title'>
            <img src={title} alt="checkout" />
            <h2>Checkout</h2>
          </div>
          <div className='inputs'>
            <div className='block'>
              <img src={smile} alt="smile" />
              <div>
                <label>Your Name</label>
                <input type="text" placeholder="Jerome Porter"/>
              </div>
            </div>
            <div className='block'>
              <img src={phone} alt="phone" />
              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="(433) 577-1343"/>
              </div>
            </div>
            <div className='block'>
              <img src={map} alt="map" />
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