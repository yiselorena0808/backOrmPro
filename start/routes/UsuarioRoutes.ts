import Router from "@adonisjs/core/services/router"
import UsuariosController from "../../app/controller/UsuarioController.js"

const usuario = new UsuariosController()

Router.get('/listarUsuarios', usuario.listarUsuarios)
Router.get('/idUsuario/:id', usuario.listarUsuarioId)
Router.put('/actualizarUsuario/:id', usuario.actualizarUsuario)
Router.delete('/eliminarUsuario/:id', usuario.eliminarUsuario)
Router.get('/conteoUsuarios', usuario.conteoUsuarios)
Router.post('/register',usuario.register)
Router.post('/login',usuario.login)
