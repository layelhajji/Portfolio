import React, { useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavBar = () => {
    const menuRef=useRef()
    const openMenu=()=>{
        menuRef.current.style.right="0"
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px"
    }
    const resumeUrl = 'https://layelhajji.github.io/Portfolio/assets/pdf/CvLayel.pdf';  // Le chemin vers ton fichier PDF dans le dossier public


    const handleDownload = () => {
        // Redirige vers le lien pour afficher le CV
        window.open(resumeUrl, '_blank');  // Ouvre le CV dans un nouvel onglet
    };
  return (
    <div className='navbar'>
        <h1>Layel.</h1>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul  ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link'offset={50} href="#home">Home</AnchorLink></li>
            <li><AnchorLink className='anchor-link'offset={50} href="#about">About Me</AnchorLink></li>
            <li><AnchorLink className='anchor-link'offset={50} href="#portfolio">Portfolio</AnchorLink></li>
            <li><AnchorLink className='anchor-link'offset={50} href="#communityLife">Community Life</AnchorLink></li>
            <li><AnchorLink className='anchor-link'offset={50} href="#contact">Contact</AnchorLink></li>
        </ul>
        
           <button  className="nav-connect" onClick={handleDownload}>
                My Resume
            </button>
            
      
    </div>
  )
}

export default NavBar
