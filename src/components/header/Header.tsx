import React from 'react'
import { BLUE_COLOR } from '../../constants/strings'
import { useAppContext } from '../../contexts/app.context'
import LogoGraphic from '../../graphics/Logo.graphic'
import DownPointerIcon from '../../icons/DownPointer.icon'
import HamburgerIcon from '../../icons/Hamburger.icon'
import SearchIcon from '../../icons/Search.icon'
import './header.style.scss'

function Header() {
    const { isMobile, setMenuIsOpen, menuIsOpen } = useAppContext()
    return (
        <header>
            <div className="d-flex left-section align-items-center">
                <a href='/' className='logo'>
                    <LogoGraphic />
                </a>
                {!isMobile && <div className="search-bar">
                    <input type="text" placeholder='Search for anything' />
                    <button className="search-btn">
                        <SearchIcon color='#ffffff' />
                    </button>
                </div>}

            </div>
            <div className="right-section">
                {!isMobile && <>
                    <a>Docs</a>
                    <div className="icon"><img src="/images/header/bell.png" alt="" /></div>
                    <div className="profile-menu">
                        <div className="profile-img">
                            <img src="/images/header/avatar.png" alt="" />
                        </div>
                        <span>Adedeji</span>
                        <DownPointerIcon color={BLUE_COLOR} />
                    </div>
                </>}
                {isMobile && <a className='menu' onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <HamburgerIcon />
                </a>}
            </div>
        </header>
    )
}

export default Header