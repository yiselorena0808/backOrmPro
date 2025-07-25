import ListaChequeoService from '#services/ListaChequeoService'
import { messages } from '@vinejs/vine/defaults'

const listaChequeoService = new ListaChequeoService()

class ListaChequeoController {
  async crearLista({ request, response }) {
    try {
      const datos = request.body()
      const nueva = await listaChequeoService.crear(datos)
      return response.json({ msj: 'lista creada', datos: nueva })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async listarListas({ response }) {
    try {
      const listas = await listaChequeoService.listar()
      return response.json({ msj: 'listado', datos: listas })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }
  async actualizar({ params, request, response }) {
      try {
        const actualizado = await listaChequeoService.actualizar(params.id, request.body())
        return response.json({ msj: 'estado actualizado', datos: actualizado })
      } catch (error) {
        return response.json({ error: error.message, messages })
      }
    }
  
    async eliminar({ params, response }) {
      try {
        const resp = await listaChequeoService.eliminar(params.id)
        return response.json({ msj: resp })
      } catch (error) {
        return response.json({ error: error.message })
      }
    }
}

export default ListaChequeoController
