import Form from './Components/Form'
import Cita from './Components/Cita'

function App() {
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
          <Cita/>
          <Cita/>
          <Cita/>
          <Cita/>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
