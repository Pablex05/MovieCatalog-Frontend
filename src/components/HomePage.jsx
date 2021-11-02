import React from 'react';
import axios from "axios";

import Header from '../template/Header'
import {Apiurl} from "../services/apirest";


class HomePage extends React.Component{

    state = {
        pacientes:[]
    }

    clickPaciente(id){
        this.props.history.push("/editar/"+ id)
    }
    componentDidMount(){
        let url = Apiurl + "pacientes?page=1";
        axios.get(url)
        .then(response =>{
            this.setState({
                pacientes:response.data

            })
        })
    }

    render() {
        return(
            <React.Fragment>
                <Header>
                    <button type="submit" className="btn btn-primary" style={{marginRight: "10px"}} onClick={()=>this.put()}>Editar</button>
                    <button type="submit" className="btn btn-danger" style={{marginRight: "10px"}} onClick={()=>this.delete()}>Eliminar</button>
                </Header>

            </React.Fragment>
        );
    }
}

export default HomePage