import React from 'react'
import './header.css'
import Bubbles from '../../components/bubbles/Bubbles'
import Forms from '../header/headerImg/Forms.png'
import TextAnimation from '../../components/text-animation-header/TextAnimationHeader'
import Ilus from '../../components/ilus-header/IlusHeader'


const Header = () => {

  return (
    <div className='header'>
        <div className="header-left">
            <Ilus />
        </div>
        <div className="header-right">
            <div className="header-container-img">
                <img className="header-img" src={Forms} alt="" />
            </div>
            <div className="header-bubbles">
                <Bubbles />
            </div>
            <div className="header-right-container-text">
                <div className="header-right-text">
                    <h1 className='header-right-text-static'>SOMOS</h1>
                </div>
                <div className="header-right-text-down">
                    <p className="header-right-text-p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    </p>
                </div>
            </div>
            <div className="header-right-container-text-dinamic">
                <TextAnimation />
            </div>
        </div>
    </div>
  )
}

export default Header