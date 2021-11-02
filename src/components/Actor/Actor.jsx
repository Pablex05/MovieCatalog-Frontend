import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";

class Actor extends React.Component{


    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div class="flex-xl-column" align="center" >
                    <div class="container-fluid">
                        <div align="center" >
                            <div class="flex-xl-column">

                            </div>
                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Actor