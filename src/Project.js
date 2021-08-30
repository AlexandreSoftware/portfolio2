import { useEffect, useState } from "react";
function Project(props){
    let title = props.title;
    let img= "https://raw.githubusercontent.com/xandrf/"+title+"/master/favicon.svg";
    let project = props.project;
    let link = project.html_url;
    let desclink="https://raw.githubusercontent.com/xandrf/"+title+"/master/Readme.md";
    let [desc,setDesc] = useState(true);
    let [hasDesc,setHasDesc] = useState(false);
    let [imageloaded,setImageLoaded] =useState(false)
    let onImageError = () => {
        setImageLoaded(true)
    }
    function getRepdesc(){
        fetch(desclink).then(response=>response.text()).then(data=>{setDesc(data);setHasDesc(true);}).catch(err=>{
            console.log(err)
            setDesc("We Werent able to find the data")
            setHasDesc(true);
        }
            );
    }
    useEffect(()=>getRepdesc(),[]);
    return(
       <div class="project">
           <img onError={onImageError} src={imageloaded ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Gnome-image-svg-wip.svg":img} alt="cant load image" class="content-image"/>
           <span class="title">{title}</span>
           {!hasDesc && <div class="content-text">Loading</div> }
           {hasDesc && desc!=undefined && <div class="content-text">{desc}</div> }
           
           <a  href={link} target="_blank" class="btn link-container">
                <button class="btn btn-secondary"> 
                    See Project
                </button>
            </a>
       </div>
    )
}
export default Project;