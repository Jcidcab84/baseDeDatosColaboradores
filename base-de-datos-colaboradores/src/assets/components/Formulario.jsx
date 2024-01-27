
const Formulario = ({
  agregarColaborador,
  nombre,
  setNombre,
  correo,
  setCorreo,
  edad,
  setEdad,
  cargo,
  setCargo,
  telefono,
  setTelefono,
  mostrarAlerta,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      mostrarAlerta('Todos los campos deben estar completos!', 'danger');
    } else {
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      mostrarAlerta('Colaborador agregado exitosamente.', 'success');

    
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    }
  };

  return (
    <>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column mb-3">
        <input
          type="text"
          placeholder="Nombre del colaborador"
          value={nombre}
          className="form-control m-2 text-center"
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email del colaborador"
          value={correo}
          className="form-control m-2 text-center"
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="number"
          placeholder="Edad del colaborador"
          value={edad}
          className="form-control m-2 text-center"
          onChange={(e) => setEdad(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cargo del colaborador"
          value={cargo}
          className="form-control m-2 text-center"
          onChange={(e) => setCargo(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Teléfono del colaborador"
          value={telefono}
          className="form-control m-2 text-center"
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button className="btn btn-primary m-2" type="submit">
          Agregar Colaborador
        </button>
      </form>
    </>
  );
};

export default Formulario;
