import React from "react";
import { Altar, AltarProps } from "../Altar/Altar";
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

        <label style={{display:'block'}}>
            Ancho
            <input type="range" min={400} max={500} value={altar.width} onChange={handleWitdhChange} />
        </label>

        <button onClick={handleSoporte1Change}>
            soporte1
        </button>

        <button onClick={handleSoporte2Change}>
            soporte2
        </button>

        <button onClick={handleBuda1Change}>
            buda1
        </button>
        <button onClick={handleBuda2Change}>
            buda2
        </button>

        <button onClick={handleIluminacion1Change}>
            Iluminacion1
        </button>

        <button onClick={handleIluminacion2Change}>
            iluminacion2
        </button>


    </div>

        



    </div>;
}