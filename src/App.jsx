import Form from './Components/Form'
import Cita from './Components/Cita'
import { useState } from 'react'

function App() {
  const [citas, setCitas] = useState([{
    mascota: "pepe",
    dueno: "jorge",
    fecha: "5?2002",
    hora: "5:30",
    sintomas: "le tiene miedo al sexo"
  },{
    mascota: "tilin",
    dueno: "jorge",
    fecha: "23/2/2023",
    sintomas: "le tiene miedo al sexo"
  }])

  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <Form/>
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          <Cita mascota={"pepe"} dueno={"jorge"} fecha={"5?2002"} hora={"5:30"} sintomas={"le tiene miedo al sexo"}/>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
