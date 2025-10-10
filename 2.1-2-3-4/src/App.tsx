import PageTitle from "./components/PageTitle/pageTitle";
import Cinema from "./components/Cinema/cinema";
import"./components/Cinema/cinema.css"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";


const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  const cinema1Name = "UGC DeBrouckère";


  const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  return (
    <div>
      <Header img="https://example.com/logo.png" alt="Logo de mon site">
          <nav>
            <a href="#">Accueil</a>
        </nav>
      </Header>

      <PageTitle title={pageTitle}/>
      <Cinema name={cinema1Name} movie={moviesCinema1}/>
      <Cinema name={cinema2Name} movie={moviesCinema2}/>
      <Footer img="exemple.com" alt="Pas encore d'image">
          <nav>
            <a href="#">Contactez nous</a>
          </nav>     
      </Footer>
    </div>
  );
};

export default App;