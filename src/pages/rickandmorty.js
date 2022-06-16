/* eslint-disable @next/next/no-img-element */
import styles from "../styles/rickstyle.module.css";

const Characters = ({ results, error }) => {
  return (
    <div className={styles.main}>
     <h1 className={styles.h1}><a className={styles.a}  href="#0">Personajes de Rick and Morty</a></h1>
      <div className={styles.container}>
        {results.map((results, index) => (
          <div key={results.name}>
            <img className={styles.img}
              width={400}
              height={400}
              src={`https://rickandmortyapi.com/api/character/avatar/${
                index + 1
              }.jpeg`}
              alt={results.name}
            />
            <h4>Personaje: {results.name}</h4>
            <h5>Estatus: {results.status}</h5>
            <h5>Especie: {results.species}</h5>
            <h5>Género: {results.gender}</h5>
          
          </div>
        ))}
      </div>
      
    </div>
  );
};

Characters.getInitialProps = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();

    return {
      results: data.results,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default Characters;