import React from 'react'
import layel2 from '../../assets/layel2.jpg'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Home = () => {
    const resumeUrl = '/cv_layel (1).pdf';  // Le chemin vers ton fichier PDF dans le dossier public


    const handleDownload = () => {
        // Redirige vers le lien pour afficher le CV
        window.open(resumeUrl, '_blank');  // Ouvre le CV dans un nouvel onglet
    };
  return (
    <div id='home' className='home'>
        <img src={layel2} alt="" />
        <h1>
            <span>I'm Layel Hajji,</span> Computer Science Student At ENSI.</h1>
        <div className="home-action">
           <div className="home-connect"><AnchorLink className='anchor-link'offset={50} href="#contact">Connect With Me</AnchorLink></div> 
          
           <button className="home-resume" onClick={handleDownload}>
                My Resume
            </button>
           

        </div>
    </div>
  )
}

export default Home
