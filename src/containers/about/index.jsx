// Import necessary modules and components
import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.css';
import { FaDatabase, FaDev } from 'react-icons/fa';
import { DiAndroid, DiApple } from 'react-icons/di';

// Define personal details and summary
const personalDetails = [
  {
    label: "Name",
    value: "Chelsy Yadav",
  },
  {
    label: "DOB",
    value: "22/04/2001",
  },
  {
    label: "Address",
    value: "Anand Nagar, Gwalior, Madhya Pradesh",
  },
  {
    label: "Email",
    value: "Chelsyyadav22@gmail.com",
  },
  {
    label: "Contact No.",
    value: "8839761600",
  },
];

const ChelsySummary = "Experienced React Native developer with specialized expertise in React and React Native. Proven track record of contributing to projects by building dynamic and efficient user interfaces with proficiency.";

// Define the About component
const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content_personalWrapper'>
          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3>React Native Developer</h3>
            <p>{ChelsySummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content_servicesWrapper'>
          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
          <div className='about__content_servicesWrapper__innerContent'>
            <div>
              <FaDev size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <DiApple size={60} color='var(--yellow-theme-main-color)' />
            </div>
          </div>
          </Animate>
         
        </div>
      </div>
    </section>
  );
}

export default About;
