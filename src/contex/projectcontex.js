import { createContext , useState , useEffect} from "react";
import { API, graphqlOperation } from "aws-amplify";
import {listProjects} from  '../graphql/queries'
const ProjectContex = createContext(null);


const  ProjectProvider = ({children})=> {
    const [projects ,setProjects]= useState([]);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
       fechProjets();
    }, []);
     const  fechProjets = async () => {

        try{
            setLoading(true)
            const projectData = await API.graphql(graphqlOperation(listProjects) );
            const projectList = await projectData.data.listProjects.items ;
           console.log('projectList', projectList);
           setProjects(projectList)
        }catch(error){}
     }




 return (
    <ProjectContex.Provider value={{projects , loading}}>
        {children}
    </ProjectContex.Provider>
 )

};

export {ProjectContex ,ProjectProvider};

