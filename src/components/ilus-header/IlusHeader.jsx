import React from 'react'
import './ilusHeader.css'
import Bloging from './ilus-img/Bloging.png'

const IlusHeader = () => {
  return (
    <div className='ilus-header'>
        <img className='ilus-header-img' src={Bloging} alt="" />
    </div>
  )
}

export default IlusHeader