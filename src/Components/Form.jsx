import { useState } from "react"

const Form = ({ añadirCita }) => {

    const [cita, setCita] = useState({})
    const handleChange = (e) => setCita({ ...cita, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        añadirCita(cita)
        setCita({})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input required onChange={handleChange} type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
                <label>Nombre Dueño</label>
                <input required onChange={handleChange} type="text" name="dueno" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
                <label>Fecha</label>
                <input required onChange={handleChange} type="date" name="fecha" className="u-full-width"/>
                <label>hora</label>
                <input required onChange={handleChange} type="time" name="hora" className="u-full-width"/>
                <label>Sintomas</label>
                <textarea required onChange={handleChange} name="sintomas"className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </>
    )
}

export default Form