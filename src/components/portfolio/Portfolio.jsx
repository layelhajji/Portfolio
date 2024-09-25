import React from 'react'
import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
        <div className="portfolio-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="portfolio-container">
                    <div className="ligne1">
                    <div className="project-container">
                       
                       <div className="project">
                           <div className="project-title"><h1>StaffTrack</h1></div>
                           <div className="project-description">
                               <p>
                               An application that simplifies employee management through simple and efficient CRUD operations.        </p>
                               </div>
                               <br />
                           <div className="technologies">
                               <div className="technologie">ReactJS</div>
                               <div className="technologie">NodeJS</div>
                               <div className="technologie">ExpressJS</div>
                               <div className="technologie">MongoDB</div>
                               

                           </div>
                           <div>
                            <a href="https://github.com/layelhajji/StaffTrack" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                       </div>
                   </div>
                   <div className="project-container">
                       
                       <div className="project">
                           <div className="project-title"><h1>MindfulU</h1></div>
                           <div className="project-description">
                               <p>
                               A mobile app for students offering mental health assessments, mood tracking, and support resources, including a chatbot and psychotherapist contacts, to enhance mental well-being and self-care.
                               </p>
                               </div>
                           <div className="technologies">
                               <div className="technologie">flutter</div>
                               <div className="technologie">rasa</div>
                               <div className="technologie">firebase</div>
                               <div className="technologie">python</div>
                               

                           </div>
                           <div>
                            <a href="https://github.com/Eya-khalfallah-23/MindfulU" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                       </div>
                   </div>
                   <div className="project-container">
                       
                       <div className="project">
                           <div className="project-title"><h1>ChatConnect</h1></div>
                           <div className="project-description">
                               <p>
                               A real-time chat application that provides secure authentication to enable instant conversations.
                               </p>
                               </div>
                               <br />
                           <div className="technologies">
                               <div className="technologie">ReactJS</div>
                               <div className="technologie">Firebase</div>
                              
                               

                           </div>
                           <div>
                            <a href="https://github.com/layelhajji/ChatConnect" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                       </div>
                   </div>
                    </div>
                    <div className="ligne2">
                    <div className="project-container">
                        
                        <div className="project">
                            <div className="project-title"><h1>Cozy </h1></div>
                            <div className="project-description">
                                <p>
                                A website that allows users to discover and view a variety of cosmetic products.
                                </p>
                                </div>
                                <br />
                            <div className="technologies">
                                <div className="technologie">HTML</div>
                                <div className="technologie">CSS</div>
                                <div className="technologie">JS</div>
                                <div className="technologie">PHP</div>
                                

                            </div>
                            
                            <div>
                            <a href="https://github.com/layelhajji/cozy_project" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        
                        <div className="project">
                            <div className="project-title"><h1>ClimaCheck </h1></div>
                            <div className="project-description">
                                <p>
                                an application that provides real-time weather forecasts for quick and easy consultation.
                                </p>
                                </div>
                                <br />
                            <div className="technologies">
                                <div className="technologie">ReactJS</div>
                                
                                

                            </div>
                            <div>
                            <a href="https://github.com/layelhajji/ClimaCheck-" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        
                        <div className="project">
                            <div className="project-title"><h1>StockManager</h1></div>
                            <div className="project-description">
                                <p>
                                A command-line application that simplifies the tracking and management of inventory.
                                </p>
                                </div>
                                <br />
                            <div className="technologies">
                                <div className="technologie">C</div>
                               

                            </div>
                            <div>
                            <a href="https://github.com/layelhajji/StockManager" target="_blank" rel="noopener noreferrer">
                            <button className="github">Github</button>
                            </a>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
       
    </div>
  )
}

export default Portfolio
