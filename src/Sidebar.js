import "./Sidebar.css"
function Sidebar(){
    return(
        <div class="sidebar">
            <img class="logo" src={require("./img/logo.svg").default}/>
            <div class="name">Xandrf</div>
            <div class="contact-info">
                <a href="mailto: xandrf@protonmail.com" class="email">Email</a>
                <a href="https://www.linkedin.com/in/carlos-oliveira-8986a7175/" class="linkedin">Linkedin</a>
                <a href="https://github.com/xandrf" class="github">Github</a>
                <a href="https://www.twitch.tv/xandrf" class="twitch">Twitch</a>
            </div>
            <ul class="skills">
                Skills:
                <li>C#</li>
                <li>Asp.net</li>
                <li>.Net Core/Framework</li>
                <li>Html/css</li>
                <li>React</li>
                <li>Node</li>
                <li>Mssql</li>
                <li>Oracle</li>
                <li>mongodb</li>
            </ul>
        </div>
    )
}
export default Sidebar;