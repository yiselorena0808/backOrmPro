import Route from "@adonisjs/core/services/router"
import GestionController from "../../app/controller/GestionEppController.js"

const gestion = new GestionController()

Route.post('/crearGestion', gestion.crearGestion)
Route.get('/listarGestiones', gestion.listarGestiones)
Route.put('/actualizarEstadoGestion/:id', gestion.actualizarEstado)
Route.delete('/eliminarGestion/:id', gestion.eliminarGestion)
