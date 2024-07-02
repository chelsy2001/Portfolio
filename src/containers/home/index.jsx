import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'

const Home = () => {

  const navigate = useNavigate();
  console.log(navigate)

   const handleNavigationToContactMePage = () =>{
    navigate("/contact");
   }
  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Chelsy
          <br/>
          React Native Developer
        </h1>
      </div> 
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateY(550px)'
      }}
      end={{
        transform:'translatex(0px)'
      }}>
      <div className='home__contact-me'>
        <button onClick={handleNavigationToContactMePage}>Hire Me</button>
      </div>
      </Animate>
    </section>
  )
}

export default Home
