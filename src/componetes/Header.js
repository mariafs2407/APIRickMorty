import React from 'react';
import { useState, useEffect } from "react";
import { obtenerTodo } from '../funciones';
import rick from '../assets/rick-morty.jpg';
import './Header.css'

const Header = () => {
    const url = "https://rickandmortyapi.com/api/character"
    const [paginas, setPaginas] = useState(null)
    const [total, setTotal] = useState(null)

    
    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((info) => {            
            setTotal(info.info.count)
            setPaginas(info.info.pages)
        })
        .catch(() => {
            console.error("la peticion fallo")
        })
    }, [])

    return (
        <div>
            <div className="encabezado">
                <h2 className="titulo"> Rick and Morty</h2>
                <img src={rick} alt="" />
            </div>

            <div className="info">
                <div className="tpersonajes ">
                    <h2>Total de personajes :</h2>
                    <p>{total}</p>
                </div>
                <div className="tpaginas ">
                    <h2>Cantidad de páginas :</h2>
                    <p>{paginas}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;