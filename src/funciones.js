
export const obtenerTodo = async (url, setSiguiente, setAnterior, setPersonajes) => {
    const peticion = await fetch(url)
    //console.log(peticion) --verificamos la conexion
    const { info, results } = await peticion.json()
    setSiguiente(info.next)
    info.prev != null ? setAnterior(info.prev) : setAnterior(null)    
    setPersonajes(results)
    console.log(info, results)
}

export const obtenerPersonaje =async (id,setPersonaje) => {
    const peticion=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const resultado=await peticion.json()
    setPersonaje(resultado)

}