import { useState } from "react"
import { useLoginChangeContext } from "../LoginProvider";
import '../Formulario.css';

const Formulario = () => {

    const changeUser=useLoginChangeContext();

    const [nombre, setNombre]=useState('');
    const [email, setEmail]=useState('');

    const handleSubmit =(event)=>{
        event.preventDefault();
        changeUser({nombre, email});
    }

  return (
    <form onSubmit={handleSubmit} action="">
         <div>
            <label htmlFor="" className="Label">Nombre: </label>
            <input type="text" onChange={(e)=>setNombre(e.target.value)} className="InputText"/>  
         </div>
         <div>
            <label htmlFor="" className="Label">E-mail: </label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} className="InputText"/>
         </div>
         <input type="submit" value="Enviar" className="Submit"/>
    </form>
   
  )
}

export default Formulario