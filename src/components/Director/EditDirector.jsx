import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";

class EditActor extends React.Component{

    state = {
        form: {
            "Name" : "",
        }
    }

    manejadorChange = async e=>{
        //asigna un valor a una variable del estado
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    put =()=>{
        let id = this.props.match.params.id;
        let url = Apiurl + "director/edit/"+id;
        axios.put(url, this.state.form)
            .then(response=>{
                console.log(response)
                this.props.history.push("/director");
            })
    }

    delete =()=>{
        let id = this.props.match.params.id;
        let url = Apiurl + "director/delete/"+id;
        let datos = {
            "id": id
        }
        axios.delete(url, {headers:datos})
            .then(response=>{
                this.props.history.push("/director");
            })
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let url = Apiurl + 'director/getById/'+id;
        console.log(url)
        axios.get(url)
            .then(response =>{
                this.setState({
                    form:{
                        Name: response.data.Name,
                    }
                })
                console.log(response)
            })
    }

    render() {

        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div className="container">
                    <br/>
                    <h3 style={{color:"#067791FF"}} align="center">Editar Director</h3>
                </div>
                <div className="container">
                    <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="col-md-2 control-label"></label>
                                <div className="col-md-10">
                                    <input className="form-control" name="Name" placeholder="Name" type="text"
                                           value={this.state.form.Name}
                                           onChange={this.manejadorChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <br/>
                        <button type="submit" className="btn btn-primary" style={{marginRight: "10px"}} onClick={()=>this.put()}>Editar</button>
                        <button type="submit" className="btn btn-danger" style={{marginRight: "10px"}} onClick={()=>this.delete()}>Eliminar</button>
                        <a className="btn btn-dark" href="/director">Salir</a>
                    </form>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default EditActor