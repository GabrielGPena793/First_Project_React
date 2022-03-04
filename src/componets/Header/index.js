import logo from "../../assets/maquete-do-logotipo-na-parede-cinza_35913-2122.jpg"
import "./styles.css";

export default function Header(){
    return(

        <header className="header_container_home">
            <div className="header-container-logo">
                <img src={logo} alt="logo"  className="img_header_home"/>
                <h1>NeoArts</h1>
            </div>
            
            <ul className="navigation-header">
                <li><a href="#">Home</a></li>
                <li><a href="#">Body</a></li>
                <li><a href="#">Footer</a></li>
            </ul>

        </header>
    )
}