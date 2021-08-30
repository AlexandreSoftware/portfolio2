import { useEffect, useState } from "react";
import Project from "./Project"
import "./Project.css"
function ProjectsContainer(){
    
    let user ="xandrf";
    let [isFetched,setIsFetched] = useState(false);
    let [projects,setProjects] =useState(null);
    async function FetchData(){
        await fetch("https://api.github.com/users/"+user+"/repos")
        .then(res=>res.json()
                .then(data=>{
                    console.log(data)   
                    setProjects(data)
                    setIsFetched(true)
                    
                }));
    
    }
    useEffect(
        ()=>FetchData()
            ,[])
    return (
    <div class="Projects-container">
        {!isFetched && <div>Loading Data ...</div>}
        {isFetched && projects.map(element => {
          return <Project title={element.name} project={element}></Project>  
        })}
    </div>
    )
}
export default ProjectsContainer;