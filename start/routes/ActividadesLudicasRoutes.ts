import Route from "@adonisjs/core/services/router"
import ActividadesLudicasController from "../../app/controller/ActividadLudicaController.js"

const actividad = new ActividadesLudicasController()

Route.post('/crearActividadLudica', actividad.crearActividad)
Route.get('/listarActividadesLudicas', actividad.listarActividades)
Route.delete('/eliminarAct/:id',actividad.eliminar)
Route.put('/actualizarAc/:id',actividad.actualizar)
