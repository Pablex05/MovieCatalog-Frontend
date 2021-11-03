import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";


class EditMovie extends React.Component{

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
            "Cast": [],
            "Director": ""
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
        //console.log(this.state.form);
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    put =()=>{
        let id = this.props.match.params.id;
        let url = Apiurl + "movie/edit/"+id;
        axios.put(url, this.state.form)
            .then(response=>{
                console.log(response)
                this.props.history.push("/movie");
            })
    }

    delete =()=>{
        let id = this.props.match.params.id;
        let url = Apiurl + "movie/delete/"+id;
        let datos = {
            "id": id
        }
        axios.delete(url, {headers:datos})
            .then(response=>{
                this.props.history.push("/movie");
            })
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let url = Apiurl + 'movie/getById/'+id;
        console.log(url)
        axios.get(url)
            .then(response =>{
                this.setState({
                    form:{
                        Title: response.data.Title,
                        Genre: response.data.Genre,
                        Release_Date: response.data.Release_Date,
                        Duration: response.data.Duration,
                        Trailer: response.data.Trailer,
                        Language: response.data.Language,
                        Subtitle: response.data.Subtitle,
                        Cast: response.data.Cast,
                        Director: response.data.Director,
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
                <div class="flex-xl-column" align="center" >
                <div className="row-cols">
                    <div align="center" >
                        <br/><br/><br/>
                        <h3 style={{backgroundColor:"black", color:"white"}}>Editar Pelicula</h3>
                        <form onSubmit={this.manejadorSubmit}>
                            <table align="center">
                                <td>
                                    <tr>
                                        <input className="fadeIn second" name="Title" placeholder="Title" type="text"
                                               value={this.state.form.Title}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Genre" placeholder="Genre" type="text"
                                               value={this.state.form.Genre}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Release_Date" placeholder="Release_Date" type="text"
                                               value={this.state.form.Release_Date}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Duration" placeholder="Duration" type="text"
                                               value={this.state.form.Duration}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <input className="fadeIn second" name="Trailer" placeholder="Trailer" type="text"
                                               value={this.state.form.Trailer}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Language" placeholder="Language" type="text"
                                               value={this.state.form.Language}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Subtitle" placeholder="Subtitle" type="text"
                                               value={this.state.form.Subtitle}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Cast" placeholder="Cast" type="text"
                                               value={this.state.form.Cast}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                    <tr>
                                        <input className="fadeIn second" name="Director" placeholder="Director" type="text"
                                               value={this.state.form.Director}
                                               onChange={this.manejadorChange}
                                        />
                                    </tr>
                                </td>
                            </table>
                            <button type="submit" className="btn btn-primary" style={{marginRight: "10px"}} onClick={()=>this.put()}>Editar</button>
                            <button type="submit" className="btn btn-danger" style={{marginRight: "10px"}} onClick={()=>this.delete()}>Eliminar</button>
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

export default EditMovie