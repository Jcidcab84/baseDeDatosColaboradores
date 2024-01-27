import { useState } from 'react';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';
import Buscador from './assets/components/Buscador';
import Alert from './assets/components/Alert';
import { BaseColaboradores } from './BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertColor, setAlertColor] = useState('success');

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (!nuevoColaborador.nombre || !nuevoColaborador.correo || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
      mostrarAlerta('Completa todos los campos!', 'danger');
    } else {
      setColaboradores([...colaboradores, { ...nuevoColaborador, id: Date.now().toString() }]);
      mostrarAlerta('Colaborador agregado exitosamente.', 'success');
      limpiarCamposFormulario();
     
    }
  };

  const eliminarColaborador = (id) => {
    const nuevaLista = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevaLista);
    setAlertMessage('Colaborador eliminado exitosamente.');
    setAlertColor('success');
  };

  const buscarColaborador = (termino) => {
    const resultadoBusqueda = BaseColaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(termino.toLowerCase())||
        colaborador.edad.toLowerCase().includes(termino.toLowerCase())||
        colaborador.cargo.toLowerCase().includes(termino.toLowerCase())||
        colaborador.telefono.toLowerCase().includes(termino.toLowerCase())
    );

    setColaboradores(resultadoBusqueda);
    limpiarAlerta();
  };
  const mostrarAlerta = (mensaje, color) => {
    setAlertMessage(mensaje);
    setAlertColor(color);
  };

  const limpiarAlerta = () => {
    setAlertMessage(null);
    setAlertColor('success');
  };

  const limpiarCamposFormulario = () => {
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>
      <Buscador buscarColaborador={buscarColaborador} />
      <Listado
        colaboradores={colaboradores}
        eliminarColaborador={eliminarColaborador}
        mostrarAlerta={mostrarAlerta}
      />
      <hr />
      <Formulario
        agregarColaborador={agregarColaborador}
        nombre={nombre}
        setNombre={setNombre}
        correo={correo}
        setCorreo={setCorreo}
        edad={edad}
        setEdad={setEdad}
        cargo={cargo}
        setCargo={setCargo}
        telefono={telefono}
        setTelefono={setTelefono}
        mostrarAlerta={mostrarAlerta} 
        />
      <Alert message={alertMessage} color={alertColor} />
    </div>
  );
};

export default App;
