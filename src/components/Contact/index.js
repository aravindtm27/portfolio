import AnimatedLetters from '../AnimatedLetters/index.js';
import {useState,useEffect} from 'react';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },2000
        )
    });

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                    </h1>
                    <p> I am interested in freelance opportunities and full time roles where I can work on ambitious projects. If you have any request or question, don't hesitate to contact me using the form below.</p>
                    <form className='contact-form'>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required /> 
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" class="flat-button" />
                            </li>
                        </ul>
                    </form>
            </div>
        </div>
        </>
    )
}

export default Contact;