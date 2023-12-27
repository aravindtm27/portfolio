import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Logo = () =>{
    return(
        <div className='logo-container'>
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

export default Logo;