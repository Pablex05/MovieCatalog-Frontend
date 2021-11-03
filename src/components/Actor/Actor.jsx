import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";

class Actor extends React.Component{

    //ponemos el contructor para poder usar los props
    constructor(props){
        super(props);
    }

    state = {
        form: {
            'Name': "",
            'Movies':[]
        },
        lists: []
    }

    manejadorChange = async e=>{
        //asigna un valor a una variable del estado
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    manejadorButton=()=>{
        let url = Apiurl + "actor/add/"
        axios.post(url, this.state.form)
            .then(response =>{
                console.log(response)
                window.location.href = window.location.href;
                })
    }

    componentDidMount(){
        let url = Apiurl + "actor/getAll";
        axios.get(url)
            .then(response =>{
                this.setState({
                    lists:response.data

                })
                console.log(response)
            })
    }

    clickList(id){
        this.props.history.push("/actor/Edit/" +id)
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div class="flex-xl-column" align="center" >
                    <div className="container-xl">
                        <div align="center" >

                                <br/><br/><br/><br/><br/>
                                <h3 style={{backgroundColor:"black", color:"white"}}>Agregar Nuevo Actor</h3>
                                <form onSubmit={this.manejadorSubmit}>
                                <input type="text" className="fadeIn second" name="Name" placeholder="Name" onChange={this.manejadorChange}/>
                                <input type="submit" className="fadeIn fourth" value="Aceptar" onClick={this.manejadorButton}/>
                                </form>

                        </div>
                    </div>
                </div>
                <div className="container-xl">
                    <div class="row-cols-2" align="center">
                    <br/>
                        <h3 style={{backgroundColor:"black", color:"white"}}>Lista Actores</h3>
                    <table class="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Actor</th>
                            <th scope="col">Peliculas</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.lists.map((value, index) =>{
                            return(
                                <tr key={index} onClick={()=>this.clickList(value.id)}>
                                    <td>{value.id}</td>
                                    <td>{value.Name}</td>
                                    <td>{value.Movies+""}</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>

                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Actor