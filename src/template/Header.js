import React from "react";
import '../assetss/css/Login.css';
import logo from "../assetss/img/Logo.png";

class Header extends React.Component{

    manejadorSubmit=e=>{
        e.preventDefault();
    }
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container" align="left">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/"> <img src={logo} width="200px" alt="User Icon" href="/" width="10%" height="10%" style={{marginLeft:"2%"}}/> prePelis</a>
                </nav>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Header