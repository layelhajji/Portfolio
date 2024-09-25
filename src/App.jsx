import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import CommunityLife from './components/community_life/CommunityLife'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <CommunityLife></CommunityLife>
      <Contact></Contact>
      
    </div>
  )
}

export default App
