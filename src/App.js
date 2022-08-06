import {useContext} from 'react'
import {Amplify} from "aws-amplify";
import awsconfi from './aws-exports'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Projects from './pages/Projects';
import ProjectDetails from './compo/ProjectDetails';
Amplify.configure(awsconfi )

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectDetails/>}/>
      </Routes>
    </div>
   
      
      )
   

}

export default App;
