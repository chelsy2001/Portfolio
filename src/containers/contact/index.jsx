import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss';
import Footer from '../../components/footer';


const Contact = () => {
  return (
    <section id='contact' className='contact'>
    <PageHeaderContent
    headerText = "Contact Me"
    icon={<BsInfoCircleFill size={40} />}>
    </PageHeaderContent>
    <div className='contact__content'>
      <Animate
      play
      duration={1}
      delay={0}
      start={{
        transform:"translateX(200px)"
      }}
      end={{
        transform:"translateX(0px)"
      }}
      >
        <h3 className='contant__content__header-text'>Let's Talk</h3>
      </Animate>
      <Animate
      play
      duration={1}
      delay={0}
      start={{
        transform:"translateX(200px)"
      }}
      end={{
        transform:"translateX(0px)"
      }}
      >
        <div className='contact__content__form'>
          <div className='contact__content__form__controlswrapper'>
            <div className='nameWrapper'>
              <input name='name' className='inputName' type={'text'} required/>
              <label htmlFor='name' className='nameLabel'>Name</label>
            </div>
            <div className='emailWrapper'>
            <input name='email' className='inputEmail' type={'text'} required/>
            <label htmlFor='email' className='emailLabel'>Email</label>
            </div>
            <div className='descriptionWrapper'>
            {/* <input name='descriptionWrapper' className='inputdescription' type={'text'} required/> */}
            <textarea 
            required
            name='description'
            className='inputdescription'
            type={"text"}
            rows={"5"}
            />
            <label htmlFor='description' className='descriptionLabel'>Description</label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </Animate>
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </section>
  )
}

export default Contact