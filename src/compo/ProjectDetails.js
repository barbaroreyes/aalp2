import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {ProjectContex} from '../contex/projectcontex'

const ProjectDetails = () => {
    const {id} = useParams()
    const {projects} = useContext(ProjectContex);
    const single = projects.find( item => item.id === id)
    const {name ,picture ,description ,url , tecnologies} = single
  return (
    <div className='single-project'>
        <h2>{name}</h2>
       <div className='container-single'>
       <img className='single-img' src={picture} alt = ''/>
       </div>
       <div className='info-container'>
       <span className ='info-item'>Desciption :{description }</span>
       <span className ='info-item'>{tecnologies}</span>
       <a className ='info-item' href={url}>App</a>
       </div>
      
     
    </div>
  );
}

export default ProjectDetails;
