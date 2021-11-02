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
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/homepage"> <img src={logo} width="200px" alt="User Icon" href="/homepage" width="10%" height="10%" style={{marginLeft:"2%"}}/> prePelis</a>
                <a className="btn btn-primary" href="/register" style={{marginRight:"2%"}}> Register</a>
            </nav>
        );
    }
}

export default Header