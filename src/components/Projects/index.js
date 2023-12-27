import './index.scss';
import Sidebar from '../Sidebar/index.js';
import Proj1 from "./proj1/proj1.PNG";
import Proj2 from "./proj2/proj2.PNG";

const Projects = () => {
    return(
        <>
        <Sidebar/>

        <div className='projects'>
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