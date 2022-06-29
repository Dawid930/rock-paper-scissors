import React from 'react'

function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
    <div onClick={(e) => {
        e.stopPropagation();
      }}
      className='modalContainer'
    >
      <div className='modalRight'>
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <div className='content'>
          <h1>Rules of the game</h1>
          <h3>You have to choose from one of the icons: rock, paper or scissors.</h3>
          <p>Rock wins against scissors.</p>
          <p>Scissors win against paper.</p>
          <p>Paper wins against rock.</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Modal