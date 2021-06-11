
import  React from 'react';
import { getImageSrcFromStates } from '../../utils/getImageSrcFromStates';
import './Altar.css';

export interface AltarProps{
    name:string;
    pared?:string;
    soporte?:string;
    buda?:string;
    vela?:string;
    planta?:string;
    iluminacion?:string;
    width: number;

}

export const Altar : React.FC<AltarProps>=({name, soporte, width,buda, iluminacion})=>{

    const imagePisoSrc = getImageSrcFromStates("suelo")
    const imageSoporteSrc = getImageSrcFromStates(soporte)
    const imageBudaSrc = getImageSrcFromStates(buda)
    const imageiluminacionSrc = getImageSrcFromStates(iluminacion)
    const ancho = width;


    return (<div className="">



    <h1>{name}</h1>

    <img className={soporte} width={width} src={imageSoporteSrc} alt=""/>
    <img className="piso" src={imagePisoSrc} alt=""/> 
    <img className={buda} src={imageBudaSrc} alt=""/> 
    <img className={iluminacion} src={imageiluminacionSrc} alt=""/> 

    </div>

    );
}