import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menuOpened, setmenuOpened] = useState(false)

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./White-color.png" alt='logo' width={100} />
                <OutsideClickHandler onOutsideClick={() => {
                    setmenuOpened(false)
                }}>

                    <div className=" flexCenter h-menu" style={getMenuStyle(menuOpened)}>
                        <a href=""> Residencies</a>
                        <a href=""> Our Values</a>
                        <a href=""> Contact Us</a>
                        <a href=""> Get Started</a>
                        <button className='button'>
                            <a href=""> Contact </a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon">
                    <BiMenuAltRight size={50} onClick={() => { setmenuOpened((prev) => !prev) }} />
                </div>
            </div>
        </section>
    )
}

export default Header
