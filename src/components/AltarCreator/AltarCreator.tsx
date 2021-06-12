import React from "react";
import { Altar, AltarProps } from "../Altar/Altar";
import { getImageSrcFromStates } from '../../utils/getImageSrcFromStates';
import './AltarCreator.css';

interface AltarCreatorProps{

}

export const AltarCreator: React.FC<AltarCreatorProps> =() => {

    const [altar, setAltar] = React.useState<AltarProps>({
        name:" ",
        width: 400,
        soporte:"soporte",
        buda:" ",
        iluminacion: " ",

    });

    const imageSoporteSrc = getImageSrcFromStates("soporte")
    const imageSoporte2Src = getImageSrcFromStates("soporte2")
    const imageBuda1Src = getImageSrcFromStates("buda")
    const imageBuda2Src = getImageSrcFromStates("buda2")
    const imageBuda3Src = getImageSrcFromStates("buda3")
    const imageiluminacion1Src = getImageSrcFromStates("iluminacion1")
    const imageiluminacion2Src = getImageSrcFromStates("iluminacion2")
    const imageiluminacion3Src = getImageSrcFromStates("iluminacion3")


    const handleWitdhChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setAltar((prev)=> ({
            ...prev,
            width: parseInt(event.target.value)
        }));

    }

    const handleSoporte1Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            soporte: "soporte"
        }));

    }

    const handleSoporte2Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            soporte: "soporte2"
        }));

    }
    const handleBuda1Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            buda: "buda"
        }));

    }
    const handleBuda2Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            buda: "buda2"
        }));

    }
    const handleBuda3Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            buda: "buda3"
        }));

    }

    const handleIluminacion1Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            iluminacion: "iluminacion1"
        }));

    }

    const handleIluminacion2Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            iluminacion: "iluminacion2"
        }));

    }

    const handleIluminacion3Change = (event:any)=>{
        setAltar((prev)=> ({
            ...prev,
            iluminacion: "iluminacion3"
        }));

    }
    

    return <div className="background">

        <div className ="Altar"> 
        <Altar
            name="Altar de meditación"
            width ={altar.width}
            soporte={altar.soporte}
            buda={altar.buda}
            iluminacion={altar.iluminacion}
            
        />
        </div>


    <div className="Settings">

        <h2>OPCIONES</h2>
        <p className="subtitle">Soporte</p>

         <div className="option">
             

        <button onClick={handleSoporte1Change} className="btn">
            <img src={imageSoporteSrc} width={100} alt="" />
        </button>

        <button onClick={handleSoporte2Change} className="btn">
        <img src={imageSoporte2Src} width={100} alt="" />
        </button>

        <label style={{display:'block'}}>
            Ancho
            <input style={{display:'block'}} type="range" min={400} max={500} value={altar.width} onChange={handleWitdhChange} />
        </label>

        </div>
        
        <p className="subtitle">Buda</p>
        <div className="option">

        <button onClick={handleBuda1Change} className="btn">
        <img src={imageBuda1Src} width={70} alt="" />
        </button>

        <button onClick={handleBuda2Change} className="btn">
        <img src={imageBuda2Src} width={70} alt="" />
        </button>

        
        <button onClick={handleBuda3Change} className="btn">
        <img src={imageBuda3Src} width={70} alt="" />
        </button>

        </div>

        <p className="subtitle">Iluminación</p>
        <div className="option">
        <button onClick={handleIluminacion1Change} className="btn">
        <img src={imageiluminacion1Src} width={70} alt="" />
        </button>

        <button onClick={handleIluminacion2Change} className="btn">
        <img src={imageiluminacion2Src} width={70} alt="" />
        </button>
        
        <button onClick={handleIluminacion3Change} className="btn">
        <img src={imageiluminacion3Src} width={70} alt="" />
        </button>
        </div>



    </div>

        



    </div>;
}