
import { useState } from 'react'
import'./../styles/card.css'
export const Card = ({imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => {

  const [added, setAdded] = useState(false);

  const clickAgregar = (e)=>{
    handleAgregar()
    setAdded(true)
  }

  const clickQuitar = (e)=>{
    handleQuitar()
    setAdded(false)
  }
  return (
    <div className="tarjeta">
      <div className="tarjeta-imagen">
        <img src={imagen} alt={titulo} className='tarjeta-titulo' />
      </div>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
      {added
      ? <button
      type='button'
      className='boton-quitar'
      onClick={clickQuitar}>
        Quitar del carrito
      </button>
      : <button
      type='button'
      className='boton-agregar'
      onClick={clickAgregar}>
      Agregar al carrito
    </button>}
      </div>
    </div>
  )
}