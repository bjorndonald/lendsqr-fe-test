import React from 'react'
import LogoGraphic from '../../../graphics/Logo.graphic'
import './leftside.style.scss'

function LeftSide() {
    return (
        <div id='left-side'>
            <a href="/" className="logo">
                <LogoGraphic />
            </a>
            <img src="/images/login/login-graphic.png" alt="" />
        </div>
    )
}

export default LeftSide