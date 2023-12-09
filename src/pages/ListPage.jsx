import ListaUsuarios from "../components/ListaUsuarios";
import NavBar from "../components/NavBar";

const ListPage = () => {
  const listaUsuarios = ["Marlen", "Linda", "Jorge", "Mayra"];

  const saludar = () => {
    console.log("Hola mundo");
  };

  const mouseover = () => {
    console.log("Pasaste por encima de la etiqueta");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <header className="row col">
          <h1>Lista de usuarios</h1>
        </header>
        <main className="row">
          <div className="col">
            <button type="button" className="btn btn-success" onClick={saludar}>
              Obtener informacion
            </button>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_657047-MLM50695240516_072022-O.webp"
              alt="Perrito"
              onMouseEnter={mouseover}
            />
            <ListaUsuarios listaUsuarios={listaUsuarios} />
          </div>
        </main>
        <section className="row">
          <article className="col">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default ListPage;
