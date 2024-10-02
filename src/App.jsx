import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useStore from "../Store/store";

function App() {
  const { pass, generar, result, copiar } = useStore();
 
  return (
    <>
      <div className="content">
        <h1>Generador de contraseñas</h1>
        <div className="content-items">
        <input type="text" value={pass} className="input" readOnly  />
        <div className="content-but">
        <button onClick={copiar} className="button" >Copiar</button>
        <button onClick={generar} className="button-generation">Generar</button>
        </div>
    
        </div>
       
      </div>
    </>
  );
}

export default App;
