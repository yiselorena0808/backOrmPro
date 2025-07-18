import Route from "@adonisjs/core/services/router"
import UsuariosController from "../../app/controller/UsuarioController.js"

const usuario = new UsuariosController()

Route.post('/crearUsuario', usuario.crearUsuario)
Route.get('/listarUsuarios', usuario.listarUsuarios)
Route.get('/idUsuario/:id', usuario.listarUsuarioId)
Route.put('/actualizarUsuario/:id', usuario.actualizarUsuario)
Route.delete('/eliminarUsuario/:id', usuario.eliminarUsuario)
Route.get('/conteoUsuarios', usuario.conteoUsuarios)
