const ListaUsuarios = (props) => {
  return (
    <>
      <ul>
        {props.listaUsuarios.map((usuario) => (
          <li key={usuario}>{usuario}</li>
        ))}
      </ul>
    </>
  );
};

export default ListaUsuarios;
