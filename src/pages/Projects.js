import {useContext}from 'react';
import {ProjectContex} from '../contex/projectcontex'
import {Link} from 'react-router-dom'
const Projects = () => {
    const {projects} = useContext(ProjectContex)
  return (
    <div className="projects">
        {projects.map((item , i )=>{
      return(<Link className="project" to={`/projects/${item.id}`} key={i}>
        
        <div className="container-project" >
        < img className="img-project" src={item.picture} alt={item.name}/>
        {item.name}
        </div>
        
      </Link>)
     })}
    </div>
  )
}

export default Projects
