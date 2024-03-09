import React , { useState , useEffect , useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.webp'

export default function Header() {

    let [ showMenu , setShowMenu ] = useState(false)
    let headerRef = useRef(null)
    let buttonRef = useRef(null)

    let handleToggle = () => {
        setShowMenu( state => !state )
    }

    useEffect(() => {
        const handleClickOutside = (event) => {

        if ( buttonRef.current.contains(event.target) )
            return 
        else if ( showMenu && !headerRef.current.contains(event.target))
            setShowMenu( false )

        }
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, [showMenu]);


  return (
    <>
        <header className="header header-default  " id="header">
            <div className="header-inner container flex justify-between items-center ">
            <div className="logo-wrapper ">
                <Link to="/" className='d-flex align-items-center text-blue'>
                <img
                    src= { logo }
                    width="180px"
                    alt="ecom deal logo"
                    className="logo"
                />
                </Link>
            </div>
            <nav className="navbar hidden md:flex">
                <Link to="/about-us">About Us</Link>
                <a href="#packages">Packages</a>{" "}
                <Link to="/ambassadors">Success Stories</Link>{" "}
                <Link to="/contact-us">Contact Us</Link>
            </nav>
            <button
                className="d-flex flex-center md:hidden toggle-menu"
                id="openMobileHeader"
                onClick={handleToggle}
                ref={buttonRef}
                aria-label='Toggle navigation'
                aria-controls="mobileMenu"
            >
                <img src="./images/menu.png" width="17px" alt="menu icon" />
            </button>
            </div>
        </header>

        <header className={`header-mobile ${ showMenu ? "header-mobile-show" : "header-mobile-hide" } `} 
        id="mobileHeader"
        ref={headerRef}
        >
            <div className="mobile-logo-wrapper flex-between ">
            <Link to="/">
                <img
                src= { logo}
                className="pt-5 mb-0 mx-auto "
                width="190px"
                alt="ecom deals logo"
                />
            </Link>

            </div>
            <nav className="header-mobile-nav pt-4">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                    <Link className="accordion-button collapsed" to="/about-us" onClick={handleToggle}>
                    About Us
                    </Link>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body"></div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <a className="accordion-button collapsed" href="#packages" onClick={handleToggle}>
                    Our Packages
                    </a>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body"></div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <Link
                    className="accordion-button collapsed"
                    to="/events"
                    onClick={handleToggle}
                    >
                    Our Success Stories
                    </Link>
                </h2>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                    <Link
                    className="accordion-button collapsed"
                    to="/ambassadors"
                    onClick={handleToggle}
                    >
                    Contact Us
                    </Link>
                </h2>
                </div>
            </div>
            </nav>
        </header>
    </>
  )
}
