import UsuarioService from '#services/UsuarioService'
import { messages } from '@vinejs/vine/defaults'

const usuarioService = new UsuarioService()

class UsuariosController {
   async register({ request, response }) {
  try {
    const {
      nombre,
      apellido,
      nombre_usuario,
      correo_electronico,
      cargo,
      contrasena,
      confirmacion
    } = request.body();

    const resultado = await usuarioService.register(
      nombre,
      apellido,
      nombre_usuario,
      correo_electronico,
      cargo,
      contrasena,
      confirmacion
    );

    if (resultado.mensaje !== 'Registro correcto') {
      return response.status(400).json(resultado);
    }

    return response.status(201).json(resultado);

  } catch (e) {
    return response.status(500).json({ error: e.message });
  }
}

  async login({request, response}){
    try{
      const {correo_electronico,contrasena}= request.body()
     const respuesta = await usuarioService.login(correo_electronico,contrasena)
     return response.json({msj:'login exitoso',respuesta})

    } catch(e) {
      return response.json({error:e.message})
    }
  }

  async crearUsuario({ request, response }) {
    try {
      const datos = request.body()
      const nuevoUsuario = await usuarioService.crear(datos)
      return response.json({ msj: 'usuario creado', datos: nuevoUsuario })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async listarUsuarios({ response }) {
    try {
      const usuarios = await usuarioService.listar()
      return response.json({ msj: 'lista de usuarios', datos: usuarios })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async listarUsuarioId({ params, response }) {
    try {
      const usuario = await usuarioService.listarId(params.id)
      return response.json({ msj: 'usuario encontrado', datos: usuario })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async actualizarUsuario({ params, request, response }) {
    try {
      const actualizado = await usuarioService.actualizar(params.id, request.body())
      return response.json({ msj: 'usuario actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async eliminarUsuario({ params, response }) {
    try {
      const resp = await usuarioService.eliminar(params.id)
      return response.json({ msj: resp })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async conteoUsuarios({ response }) {
    try {
      const resultado = await usuarioService.conteo()
      return response.json({ msj: 'conteo realizado', datos: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export default UsuariosController
