import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
import mongodb from '../../assets/mongodb.png'
import rasa from '../../assets/rasa.png'
import express from '../../assets/express.png'
import git from '../../assets/git.png'
import c from '../../assets/c.png'
import cpp from '../../assets/c++.png'
import php from '../../assets/php.png'
import flutter from '../../assets/flutter.png'
import firebase from '../../assets/firebase.png'
import bootstrap from '../../assets/bootstrap.png'
import mysql from '../../assets/mysql.png'
import postman from '../../assets/postman.png'
import python from '../../assets/python.png'
import tailwindcss from '../../assets/tailwindcss.png'
import layel3 from '../../assets/layel3.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={layel3} alt="" />
        </div>
        <div className="about-right">
            <div className="about-paragraphe">
                <p>Hello! My name is <strong>Layel Hajji</strong>, and I'm from Tunisia. I am currently studying Software Engineering at the National School of Computer Science (ENSI). During my studies, I have gained valuable experience through various entry-level positions, which have greatly enhanced my work ethic, communication skills, and adaptability.</p>

                <p>Working collaboratively with a team toward common goals has been an incredibly rewarding and enriching experience. I am excited about the opportunity to explore new and exciting projects in the future, especially in web development, cross-platform mobile development, and artificial intelligence.</p>
                <p>I have become confident using the following technologies:</p>
               
            </div>
            <div className="skills">
                <div className="line1">
                    <div className="skill">
                    <img src={html} alt="" />
                    <p>HTML</p>
                    </div>
                    <div className="skill">
                    <img src={css} alt="" />
                    <p>CSS</p> 
                    </div>
                    <div className="skill">
                    <img src={js} alt="" />
                    <p>JS</p>
                    </div>
                    
                    <div className="skill">
                    <img src={react} alt="" />
                    <p>React</p>
                    </div>
                
                   <div className="skill">
                   <img src={nodejs} alt="" />
                   <p>Node JS</p>
                   </div>
                   <div className="skill">
                    <img src={express} alt="" />
                    <p>Express</p>
                    </div>
                    <div className="skill">
                    <img src={postman} alt="" />
                    <p>Postman</p>
                    </div>
                
                </div>
                
                <div className="line2">
                   <div className="skill">
                    <img src={c} alt="" />
                    <p>C</p>
                    </div>
                    <div className="skill">
                    <img src={cpp} alt="" />
                    <p>C++</p>
                    </div>
                    <div className="skill">
                    <img src={php} alt="" />
                    <p>PHP</p>
                    </div>
                    <div className="skill">
                    <img src={python} alt="" />
                    <p>Python</p>
                    </div>
                    <div className="skill">
                    <img src={flutter} alt="" />
                    <p>Flutter</p>
                    </div>
                    <div className="skill">
                    <img src={git} alt="" />
                    <p>Git</p>
                    </div>
                    <div className="skill">
                   <img src={rasa} alt="" />
                   <p>RASA</p>
                   </div>
                    

                </div>
                <div className="line3">
                   
               
                    <div className="skill">
                    <img src={bootstrap} alt="" />
                    <p>Bootstrap</p>
                    </div>
                    <div className="skill">
                    <img src={tailwindcss} alt="" />
                    <p>TailwindCSS</p>
                    </div>
                    <div className="skill">
                    <img src={firebase} alt="" />
                    <p>Firebase</p>
                    </div>
                    <div className="skill">
                    <img src={mysql} alt="" />
                    <p>MySQL</p>
                    </div>
                    <div className="skill">
                    <img src={mongodb} alt="" />
                    <p>MongoDB</p>
                    </div>

                   
                    
                </div>

            </div>
            
        </div>



      </div>

    </div>
  )
}

export default About
