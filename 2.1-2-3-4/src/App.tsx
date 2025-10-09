const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema2Name = "UGC Toison d'Or";

  const film1C1 = { title: "Film 1 - DeBrouckère", director: "Director A" };
  const film2C1 = { title: "Film 2 - DeBrouckère", director: "Director B" };

  const film1C2 = { title: "Film 1 - Toison d'Or", director: "Director C" };
  const film2C2 = { title: "Film 2 - Toison d'Or", director: "Director D" };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1={film1C1}
        movie2={film2C1}
      />

      <Cinema
        name={cinema2Name}
        movie1={film1C2}
        movie2={film2C2}
      />
    </div>
  );
};

const PageTitle = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

interface Movie {
  title: string;
  director: string;
}

interface CinemaProps {
  name: string;
  movie1: Movie;
  movie2: Movie;
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>Nom du cinéma : {props.name}</h2>
      <h3>Film 1 : {props.movie1.title} — Réalisé par {props.movie1.director}</h3>
      <h3>Film 2 : {props.movie2.title} — Réalisé par {props.movie2.director}</h3>
    </div>
  );
};

export default App;
