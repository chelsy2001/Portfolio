import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';
import ImageFive from '../../images/image5.png';
import ImageSix from '../../images/image6.png';
import Modal from '../../components/modal';
import './styles.css';
import { Animate } from 'react-simple-animate';

const projectData = [
  {
    id: 1,
    name: 'Badho Buyer',
    image: ImageOne,
    link: 'https://play.google.com/store/apps/details?id=com.badhobuyer',
    description: '• Revamped the bottom navigator and side bar interfaces in three mobile applications, resulting in enhanced user experience, streamlined navigation, and positive stakeholder feedback.• Developed a dynamic Notification Center across three applications, enabling user to view their notifications and promptly respond to them.Developed a Schemes screen to showcase brand schemes , empowering users to easily explore and understand available schemes.'
  },
  {
    id: 2,
    name: 'Badho Seller',
    image: ImageTwo,
    link: 'https://play.google.com/store/apps/details?id=com.badhoseller',
    description: '• Revamped the bottom navigator and side bar interfaces in three mobile applications, resulting in enhanced user experience, streamlined navigation, and positive stakeholder feedback.• Developed a dynamic Notification Center across three applications, enabling user to view their notifications and promptly respond to them.Developed a Schemes screen to showcase brand schemes , empowering users to easily explore and understand available schemes.'

  },
  {
    id: 3,
    name: 'Badho Employee',
    image: ImageThree,
    link: 'https://play.google.com/store/apps/details?id=com.badhoemployee&pcampaignid=web_share',
    description: '• Revamped the bottom navigator and side bar interfaces in three mobile applications, resulting in enhanced user experience, streamlined navigation, and positive stakeholder feedback.• Developed a dynamic Notification Center across three applications, enabling user to view their notifications and promptly respond to them.Developed a Schemes screen to showcase brand schemes , empowering users to easily explore and understand available schemes.'

  },
  {
    id: 4,
    name: 'Ecommerce',
    image: ImageFour,
    link: 'https://github.com/chelsy2001',
    description: ' This project features a sleek and user-friendly interface that allows users to easily browse and purchase products.The web app utilizes Stripe for secure and seamless payment processing and React-redux for state management.The website also includes features such as user authentication, a shopping cart, add reviews to products and Admin dashboard with information on all orders ,current stock, order status'
  },
  {
    id: 5,
    name: 'News App',
    image: ImageFive,
    link: 'https://github.com/chelsy2001',
    description: 'A comprehensive News App built with React Native (frontend) and Node.js with MongoDB (backend), featuring real-time updates, offline access, and personalized content. Users can switch seamlessly between dark and light modes for a customizable reading experience. Intuitive design ensures easy navigation and a native-like feel on both iOS and Android'
  },
  {
    id: 6,
    name: 'Travel Website',
    image: ImageSix,
    link: 'https://distracted-newton-f9349f.netlify.app/',
    description: 'Developed a travel website using JavaScript for interactivity, HTML for the structure, and CSS for styling, ensuring a dynamic and visually appealing user experience. Included features such as destination galleries, travel guides, and booking forms, providing users with comprehensive tools to plan their trips effectively. Ensured a responsive design to provide an optimal viewing experience across various devices and screen sizes'
  }
];

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNameClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id='project' className='project'>
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <Animate
       play
       duration={1}
       delay={0.5}
       start={{ transform: 'translateY(200px)' }}
       end={{ transform: 'translateY(0px)' }}
      >
      <div className='project__content'>
        {projectData.map(project => (
          <div key={project.id} className='project__card'>
            <a href={project.link} className='project__image-wrapper' target='_blank' rel='noopener noreferrer'>
              <img src={project.image} alt={project.name} className='project__image' />
            </a>
            <h3 className='project__name' onClick={() => handleNameClick(project)}>
              {project.name}
            </h3>
          </div>
        ))}
      </div>
      </Animate>
      
      {selectedProject && (
        <Modal show={showModal} onClose={handleCloseModal} project={selectedProject} />
      )}
    </section>
  );
}

export default Project;
