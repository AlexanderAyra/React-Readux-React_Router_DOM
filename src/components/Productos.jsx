import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'

const Productos = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction())

    cargarProductos()
  }, [])

  return (
    <div>
      <h2
        className='text-center my-5'
      >
        Listado de Productos
      </h2>
      <table
        className='table table-striped'
      >
        <thead
          className='bg-primary table-dark'
        >
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
export default Productos
