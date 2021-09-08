import { Link } from "react-router-dom";
import "./Home.css"
import Navbar from "./Navbar";
function Home(){
    return(
        <div class="presentation">
             <div class="welcome">Welcome to my portfolio!</div>
             <img class="logo" src={require("./img/logo.svg").default}/>
             <p>
                 My name is Xandrf and i'm a software developer from Santos/SP/Brazil
             </p>
        </div>
    )
}
export default Home;