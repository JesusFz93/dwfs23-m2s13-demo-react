import Header from "../components/Header";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <Header titulo="About Page" subtitulo="Pagina de acerca" />
      <main>Este es el contenido de about page</main>
    </>
  );
};

export default AboutPage;
