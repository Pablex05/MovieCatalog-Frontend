import React from 'react';
import axios from 'axios';

//css
import '../assetss/css/Login.css';
//url api
import {Apiurl} from "../services/apirest";
//image
import logo from  '../assetss/img/Logo.png';



class Register extends React.Component{

    //ponemos el contructor para poder usar los props
    constructor(props){
        super(props);
    }
    
    state = {
        form:{
            "username": "",
            "email": "",
            "password": "",
            "role": ["admin"]
        },
        error:false,
        errorMsg:""
    }
    //manejador que hace que prevenga la recarga de la pagina
    manejadorSubmit=e=>{
        e.preventDefault();
    }

    manejadorChange = async e=>{
        //asigna un valor a una variable del estado
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //console.log(this.state.form);
    }

    manejadorButton=()=>{
        let url= Apiurl + "register"
        axios.post(url, this.state.form)
            .then(response=>{
                console.log(response)
            })
    }

    clickLogin=()=>{
        this.props.history.push("/")
    }


    render() {
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <br/><br/>
                            <img src={logo} width="100px" alt="User Icon"/>
                            <br/><br/>
                        </div>
                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text" className="fadeIn second" name="username" placeholder="username" onChange={this.manejadorChange}/>
                            <input type="text" className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}/>
                            <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>

                            <input type="submit" className="fadeIn fourth" value="Register" onClick={this.manejadorButton}/>
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.clickLogin}/>
                        </form>

                        {this.state.error === true &&
                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register