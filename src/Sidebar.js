import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"
function Sidebar(){
    return(
        <div class="sidebar">
            <Link to="/" class="logo"><img src={require("./img/logo.svg").default}/></Link>
            <div class="name">Xandrf</div>
           
        </div>
    )
}
export default Sidebar;