import React from 'react';
import { Altar } from '../../components/Altar/Altar';
import { Settings } from '../../components/Settings/Settings';
import './App.css';
import{ HashRouter, Link, Route }  from 'react-router-dom';
import { AltarCreator } from '../../components/AltarCreator/AltarCreator';

/*
const initialAltar =[ { 
    id: 'id',
    name: 'suelo',
    pared: 'pared',
    soporte: 'soporte',
    buda: 'buda',
    vela: 'vela',
    planta :'planta',
    iluminacion: 'iluminacion',
    width:100,
}]

*/
export const App =()=>{

    

    return(    

    <body >
        <HashRouter>

            <Link to="/home">Ir al Home </Link>
            <Link to="/second">Ir al second </Link>

            <Route path="/home" render={()=> <h1> home </h1>}/>
            <Route path="/second" render={()=> {


            return <main>

                <AltarCreator/>

            </main>
        }}/>
        

        </HashRouter>
    </body>);

}