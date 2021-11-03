import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";

class AddMovie extends React.Component{

    //ponemos el contructor para poder usar los props
    constructor(props){
        super(props);
    }

    state = {
        form: {
            "Title": "",
            "Genre": "",
            "Release_Date": "",
            "Duration": "",
            "Trailer": "",
            "Language": "",
            "Subtitle": "",
            "Cast":[],
            "Director": ""
        }
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
        let url = Apiurl + "movie/add"
        console.log(this.state.form)
        axios.post(url, this.state.form)
            .then(response =>{
                console.log(response)
                window.location.href = window.location.href;
            })
    }

    render() {

        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div class="flex-xl-column" align="center" >
                    <div className="row-cols">
                        <div align="center" >
                            <br/><br/><br/>
                            <h3 style={{backgroundColor:"black", color:"white"}}>Agregar Pelicula</h3>
                            <form onSubmit={this.manejadorSubmit}>
                                <table align="center">
                                    <td>
                                        <tr>
                                            <input className="fadeIn second" name="Title" placeholder="Title" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Genre" placeholder="Genre" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Release_Date" placeholder="Release_Date" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Duration" placeholder="Duration" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                    </td>
                                    <td>
                                        <tr>
                                            <input className="fadeIn second" name="Trailer" placeholder="Trailer" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Language" placeholder="Language" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Subtitle" placeholder="Subtitle" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Cast" placeholder="Cast" type="text"

                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                        <tr>
                                            <input className="fadeIn second" name="Director" placeholder="Director" type="text"
                                                   onChange={this.manejadorChange}
                                            />
                                        </tr>
                                    </td>
                                </table>
                                <button type="submit" className="btn btn-primary" style={{marginRight: "10px"}} onClick={()=>this.manejadorButton()}>Agregar</button>
                                <a className="btn btn-dark" href="/movie">Salir</a>
                            </form>
                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default AddMovie