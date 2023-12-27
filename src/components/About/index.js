import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },2000
        )
    });

    return(
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                />
            </h1>

            <p>I am a passionate and motivated software developer, 
                bringing a fresh perspective and eagerness to learn to the dynamic world of technology. 
                </p>

            <p>My technical repertoire includes proficiency in Javascript and C++, 
                along with hands-on experience in web development and database management. 
                I am adept at problem-solving and thrive in collaborative environments. 
                
                </p>

            <p> I am eager to contribute my creativity, adaptability, and analytical skills to a forward-thinking team. 
                My goal is to make a positive impact by contributing to meaningful projects, embracing challenges, and evolving as a well-rounded software professional.    
                </p>
        </div>
    
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faNodeJs} color='#71a861'/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGithub} color='#EC4D28'/>
                </div>

            </div>
        </div>
        
    </div>
    )

}

export default About;