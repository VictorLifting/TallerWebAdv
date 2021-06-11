import React from 'react';
import { ParedOptions } from '../ParedOptions/ParedOptions';
import './Settings.css';

interface SettingsProps {

    name?:string;
    Onchange? :() => void;
    
    }

export const Settings : React.FC<SettingsProps>= ({name, Onchange}) => {


    return(<div className='Settings'>
        
    <h1>{name} </h1>
    <ParedOptions onChange= {Onchange} name= 'pared' >

    </ParedOptions>
    <button>Atras</button>
    <button>Siguiente</button>
    </div>
    );

}