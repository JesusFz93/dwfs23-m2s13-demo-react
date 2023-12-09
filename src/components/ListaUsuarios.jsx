const ListaUsuarios = (props) => {
  return (
    <>
      <ul>
        {props.listaUsuarios.map((usuario) => (
          <li
            key={usuario.id}
            className={
              usuario.edad < 18
                ? "bg-success"
                : usuario.edad <= 40
                ? "bg-secondary"
                : usuario.edad <= 70
                ? "bg-warning"
                : "bg-danger"
            }
          >
            {usuario.nombre}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaUsuarios;
