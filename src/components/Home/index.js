import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters/index.js";
import { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    const nameArray = ['A','r','a','v','i','n','d',','];
    const jobArray = ['F','u','l','l','s','t','a','c','k',' ','D','e','v','e','l','o','p','e','r'];
    
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000
        )
    });

    return(
        <div className="container home-page">
            <div className="text-zone">
               <h1> <AnimatedLetters letterClass={letterClass}
                strArray={['H']}
                index={10}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={['i!']}
                index={11}/>&nbsp;<br />
                <AnimatedLetters letterClass={letterClass}
                strArray={['I']}
                index={12}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={["'"]}
                index={13}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={['m']}
                index={14}/>&nbsp;
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                index={15} /> <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={22}/></h1>
                <h2>Freelancer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;