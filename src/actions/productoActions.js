import Swal from 'sweetalert2'
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGAR_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from '../types'
import clienteAxios from '../config/axios'

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto())

    try {
      // Insertar en la API
      await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto))

      // Alerta
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success',
      )
    } catch (error) {
      dispatch(agregarProductoError(true))

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un Error',
        text: 'Hubo un Error, Intenta nevamente',
      })
    }
  }
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
})

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
})

// Si hubo un error
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,

})

// Funcion que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos())

    try {
      const respuesta = await clienteAxios.get('/productos')
      dispatch(descargaProductosExitosa(respuesta.data))
    } catch (error) {
      console.log(error)
      dispatch(descargaProductosError())
    }
  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGAR_PRODUCTOS,
  payload: true,
})

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
})

const descargaProductosError = (params) => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
})
