import {useContext} from 'react'
import {Amplify} from "aws-amplify";
import awsconfi from './aws-exports'
import {ProjectContex} from './contex/projectcontex'

import './App.css';
Amplify.configure(awsconfi )

function App() {
  const {projects} = useContext(ProjectContex);

  return (
    <div className="App">
     {projects.map((item , i )=>{
      return(<div key={i}>
        {item.name}
        <div>
        < img src={item.picture} alt={item.name}/>
        </div>
        <a href={item.url} >App</a>
      </div>)
     })}
    </div>
  );
}

export default App;
