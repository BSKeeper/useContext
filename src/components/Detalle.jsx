import { useLoginContext } from "../LoginProvider";
import '../Formulario.css'


function Detalle  ()  {

    const user = useLoginContext();

    let resultado=null;

    if (user){
        resultado=(
            <div className="DatosIniciales">
                <p>Nombre: {user.nombre}</p>
                <p>E-mail: {user.email}</p>
            </div>
          );
    }

  return resultado;
}

export default Detalle