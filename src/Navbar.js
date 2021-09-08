import { Link } from "react-router-dom";
import "./Navbar.css"
function  Navbar(){
    function shownavbar(){
        let nav=document.getElementById("nav");
        if(nav.style.display===""){
            nav.style.display="flex";
            nav.parentElement.style.backgroundColor="rgba(20, 20, 20, 0.993)"
        }
        else{
            nav.style.display="";
            nav.parentElement.style.backgroundColor="transparent"
        }
    }
    return(
        <div class="navbar">
            <img id="btn-nav" class="btn toggle" onClick={shownavbar} src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>             
            <div id="nav" class="nav-link-container">
                <Link to="/projects" class="btn projects-link">Projects</Link>
                <Link to="/blog" class="btn blog-link">Blog</Link>
                <Link to="/skills" class="btn skills-link">Skills</Link>
                <Link to="/About" class="btn About-link">About</Link>
            </div>
        </div>
    )
}
export default Navbar;