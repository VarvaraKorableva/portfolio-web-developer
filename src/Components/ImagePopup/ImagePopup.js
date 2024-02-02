import React from 'react';
import './ImagePopup.css'


function ImagePopup({ card, onClose }) {

  return (
    <aside className={`img-popup ${card.pic ? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <button className="img-popup__close-button" type="button" onClick={onClose}>
        </button>
        <div>
          <img 
            src={card.pic}
            alt={card.pic_name} 
            className='img-popup__picture'
          />
        </div>
      </div>
    </aside>
  );
}
  
export default ImagePopup;