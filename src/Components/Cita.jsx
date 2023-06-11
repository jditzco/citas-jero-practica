import { useState } from "react"

const Cita = ({mascota, dueno, fecha, hora, sintomas}) => {

    const [eliminado, setEliminado] = useState(false)
    const handleClick = e => setEliminado(!eliminado)

    return !eliminado &&
        
        <div className="cita">
              <p>Mascota: <span>{mascota}</span></p>
              <p>Dueño: <span>{dueno}</span></p>
              <p>Fecha: <span>{fecha}</span></p>
              <p>Hora: <span>{hora}</span></p>
              <p>Sintomas: <span>{sintomas}</span></p>
              <button className="button elimnar u-full-width" onClick={handleClick}>Eliminar ×</button>
        </div>
    
    
}

export default Cita