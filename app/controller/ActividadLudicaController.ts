import ActividadLudicaService from '#services/ActividadLudicaService'
import { messages } from '@vinejs/vine/defaults'

const actividadLudicaService = new ActividadLudicaService()

class ActividadesLudicasController {
  async crearActividad({ request, response }) {
    try {
      const datos = request.body()
      const nueva = await actividadLudicaService.crear(datos)
      return response.json({ msj: 'actividad creada', datos: nueva })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async listarActividades({ response }) {
    try {
      const lista = await actividadLudicaService.listar()
      return response.json({ msj: 'listado de actividades', datos: lista })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }
  async eliminar({params,request,response}){
    try{
      const {id}=params
      const eliminar= await actividadLudicaService.eliminar(id)
      return response.json({msj:eliminar})
    }catch(error){
      return response.json({error:error.message})

    }
  }
  async actualizar({params,request,response}){
    try{
      const {id}= params
      const actualizar=await actividadLudicaService.actualizar(id,id)
      return response.json({msj:actualizar})
    }catch(error){
      return response.json({error:error.message})
    }
  }
}

export default ActividadesLudicasController