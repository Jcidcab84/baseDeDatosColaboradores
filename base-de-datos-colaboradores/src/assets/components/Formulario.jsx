import { useState } from "react";

const Formulario = () => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });


const enviarFormulario = (e) => e.preventDefault();


  const capturaInput = (e) => {
    setNuevoColaborador(e.target.value);
   
   
  };

  return (
    <>
      <h2>Agregar colaborador</h2>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombreColaborador"
          placeholder="Nombre del colaborador"
          onChange={capturaInput}
        />
        <input
          type="email"
          name="emailColaborador"
          placeholder="Email del colaborador"
          onChange={capturaInput}
        />
        <input
          type="number"
          name="edadColaborador"
          placeholder="Edad del colaborador"
          onChange={capturaInput}
        />
        <input
          type="text"
          name="cargoColaborador"
          placeholder="Cargo del colaborador"
          onChange={capturaInput}
        />
        <input
          type="number"
          name="telefonoColaborador"
          placeholder="Teléfono del colaborador"
          onChange={capturaInput}
        />
        <button type="submit">Agregar colaborador</button>
      </form>
    </>
  );
};
export default Formulario;
