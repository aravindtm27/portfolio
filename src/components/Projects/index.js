import './index.scss';
import Sidebar from '../Sidebar/index.js';
import Proj1 from "./proj1/proj1.PNG";
import Proj2 from "./proj2/proj2.PNG";
import Proj3 from "./proj3/proj3.png";
import Proj4 from "./proj4/proj4.JPG";


const Projects = () => {

    return(
        <>
        <Sidebar/>

        <div className='projects'>
        <div className='proj3' onClick={()=>window.location.href="https://bestgowallet-frontend-51jr8hdna-aravindtm27s-projects.vercel.app/"}>
                <img src={Proj3} alt='project3'/>
                <h1>BestGo Wallet</h1>
                <p>A demo digital wallet that gives you a random balance and lets you transfer it.</p>
            </div>
        <div className='proj4' onClick={()=>window.location.href="https://bestgowallet-frontend-51jr8hdna-aravindtm27s-projects.vercel.app/"}>
                <img src={Proj4} alt='project4'/>
                <h1>Chatbot Flow Builder</h1>
                <p>A flow builder project using reactflow library.</p>
            </div>
         <div className='proj1'>
            <img src={Proj1} alt='project1'/>
            <h1>Bloggy</h1>
            <p>A fullstack blogging applications with all of the CRUD operation and authentication</p>
            </div>   
            <div className='proj2'>
                <img src={Proj2} alt='project2'/>
                <h1>Todotwist</h1>
                <p>A task manager application which helps you track all your todos with ease.</p>
            </div>
            
        </div>
        </>
    )
}

export default Projects;