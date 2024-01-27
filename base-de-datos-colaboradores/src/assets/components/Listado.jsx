



const Listado = () => {
  
  const colaboradores= [
    {
    id: "1",
    nombre: "Juan Soto",
    correo: "juans@colaborador.com",
    edad: "23",
    cargo: "Desarrollador FrontEnd",
    telefono: "99887766"
    },
    {
    id: "2",
    nombre: "Lucas Pailamilla",
    correo: "lucasp@colaborador.com",
    edad: "31",
    cargo: "Desarrollador Backend",
    telefono: "88779955"
    },
    {
    id: "3",
    nombre: "Diego Riquelme",
    correo: "diegor@colaborador.com",
    edad: "28",
    cargo: "Ingeniero DevOps",
    telefono: "99226644"
},
];
  return (
    <>
      <table className="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Edad</th>
      <th scope="col">Cargo</th>
      <th scope="col">Teléfono</th>
    </tr>
  </thead>
  <tbody>
    {colaboradores.map((colaborador)=>(
    <tr key={colaboradores.id}>
     
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
     
    </tr>
    
    ))}
  </tbody>
 
</table>

    </>
  
  )}

export default Listado;