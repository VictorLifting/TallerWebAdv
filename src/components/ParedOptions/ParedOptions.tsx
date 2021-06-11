import React from 'react'
import './ParedOptions.css'
interface ParedOptionsPrpos{
    name?:string;
    onChange? :()=> void;
}
export const ParedOptions : React.FC<ParedOptionsPrpos>=({name, onChange})=>{


    return(<div className='ParedOptions'>
        
        <h1>Pared</h1>
        <button onClick={onChange}>Cambiar</button>
        
        </div>);
}