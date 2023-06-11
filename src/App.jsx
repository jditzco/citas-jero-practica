import Form from './Components/Form'
import Cita from './Components/Cita'
import { useState } from 'react'

function App() {
  const [listaCitas, setListaCitas] = useState([{
    mascota: "pepe",
    dueno: "jorge",
    fecha: "5?2002",
    hora: "5:30",
    sintomas: "le tiene miedo al sexo"
  },{
    mascota: "tilin",
    dueno: "jorge",
    fecha: "23/2/2023",
    hora: "3:45",
    sintomas: "le tiene miedo al sexo"
  }])

  const añadirCita = (cita) => {
    const nuevaLista = [...listaCitas]
    nuevaLista.push(cita)
    setListaCitas(nuevaLista)
  }

  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <Form añadirCita={añadirCita}/>
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {listaCitas.map(({mascota, dueno, fecha, sintomas, hora}) => <Cita mascota={mascota} dueno={dueno} fecha={fecha} hora={hora} sintomas={sintomas}/>)}
        </div>
      </div>
    </div>
    </>

  )
}

export default App
