import React from 'react'

export default function Modal({ modal, setModal, result }) {
  if (!modal) {
    return null
  }

  return (
    <div className='modal'>
      {
        result ?
          <div >Вітаю!!! Ви виграли</div>
          :
          <div>Ви програли. Спробуйте ще</div>
      }
      <a className='close' href='/' onClick={() => setModal(null)}>+</a>
    </div>
  )
}
