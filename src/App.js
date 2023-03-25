import { useState, useEffect } from "react";
import { obtenerPersonaje, obtenerTodo } from './funciones';
import './App.css';
import rick from './assets/rick-morty.jpg';
import Header from "./componetes/Header";

function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [personajes, setPersonajes] = useState(null)
  const [personaje, setPersonaje] = useState(null)

  const irSgt = (url) => {
    setUrl(url)
  }

  const irAnter = (url) => {
    setUrl(url)
  }

  useEffect(() => {
    obtenerTodo(url, setSiguiente, setAnterior, setPersonajes)
  }, [url])

  return (
    <div className="contenedor">

      <Header />
      <div className="cont-info">


        <div className="navbar">

          <div className="paginacion">
            {anterior != null ? (
              <button className="boton"
                onClick={() => irAnter(anterior)}>
                <span>Anterior</span>
              </button>
            ) : ('')}
            {siguiente != null ? (
              <button className="boton"
                onClick={() => irSgt(siguiente)}>
                <span>Siguiente</span>
              </button>
            ) : ('')}
          </div>

          {/* lista de personajes */}
          <div className="lista">
            {personajes != null ? (
              personajes.map(personaje => (
                <li
                  key={personaje.id}
                  onClick={() => { obtenerPersonaje(personaje.id, setPersonaje) }}
                >{personaje.name}</li>
              ))) : ('')}

          </div>
        </div>

        <div className="cont-personaje">
          <h2>PERSONAJE:</h2>
          {personaje != null ? (
            <div className="personaje">
              <img key={personaje.id}
                src={personaje.image} />
              
              <div className="info-p">
                <h2 className="text-b">{personaje.name}</h2>
                <li className={personaje.status === 'Dead' || personaje.status ==='unknown' ?
                  'positivo' : 'negativo'}
                >
                  <span className="text-b"> {personaje.status} - {personaje.species}</span>
                </li>
                <p className="text-b">Genero: {personaje.gender}</p>
                <p>Ultima ubicación conocida:</p>
                <p className="tex">{personaje.location.name}</p>
                <p>Visto por primera vez en:</p>
                <p className="tex">{personaje.origin.name}</p>
              </div>
            </div>
          ) : ('')}
        </div>

      </div>





    </div>
  );
}

export default App;
