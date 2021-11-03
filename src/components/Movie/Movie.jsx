import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";

class Movie extends React.Component{

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
        },
        lists: []
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    componentDidMount(){
        let url = Apiurl + "movie/getAll";
        axios.get(url)
            .then(response =>{
                this.setState({
                    lists:response.data,
                })
                console.log(response)
            })
    }

    clickList(id){
        this.props.history.push("/movie/Edit/" +id)
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div className="container">
                    <div class="row-cols-2" align="center">
                        <br/><br/><br/><br/><br/>
                        <h3 style={{backgroundColor:"black", color:"white"}}>Lista Peliculas</h3>

                        <table class="table table-dark">
                            <thead>
                            <a className="btn btn-primary" href="/movie/Add">Agregar Movie</a>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Release Date</th>
                                <th scope="col">Duracion</th>
                                <th scope="col">Trailer</th>
                                <th scope="col">Idioma</th>
                                <th scope="col">Subtitulo</th>
                                <th scope="col">Actores</th>
                                <th scope="col">Director</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.lists.map((value, index) =>{
                                return(
                                    <tr key={index} onClick={()=>this.clickList(value.id)}>
                                        <td>{value.id}</td>
                                        <td>{value.Title}</td>
                                        <td>{value.Genre+""}</td>
                                        <td>{value.Release_Date}</td>
                                        <td>{value.Duration}</td>
                                        <td>{value.Trailer}</td>
                                        <td>{value.Language}</td>
                                        <td>{value.Subtitle}</td>
                                        <td>{value.Cast+""}</td>
                                        <td>{value.Director}</td>
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

export default Movie