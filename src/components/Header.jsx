const Header = (props) => {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.subtitulo}</p>
    </header>
  );
};

export default Header;
