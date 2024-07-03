import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { skillData } from './utils'
import { Line } from 'rc-progress'
import './styles.scss' // Ensure you import the SCSS file

const Skill = () => {
  return (
    <section id='skill' className='skill'>
      <PageHeaderContent 
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='skills__content-wrapper'>
        {skillData.map((item, i) => {
          return (
            <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{ transform: 'translateX(-200px)' }}
                end={{ transform: 'translateX(0px)' }}
              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                <div>
                  {item.data.map((skillitem, j) => (
                    <AnimateKeyframes
                      play
                      duration="1"
                      keyframes={['opacity:1', 'opacity:0']}
                      iterationCount="1"
                    >
                      <div className='progressbar-wrapper' key={j}>
                      <p>{skillitem.skillName}</p>
                        <Line 
                          percent={skillitem.percentage}
                          strokeWidth="5"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="5"
                          strokeLinecap='square'
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;
