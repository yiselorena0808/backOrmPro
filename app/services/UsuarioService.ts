import Usuario from '#models/usuario'

class UsuarioService {
  async crear(datos) {
    return await Usuario.create(datos)
  }

  async listar() {
    return await Usuario.query()
  }

  async listarId(id) {
    return await Usuario.query().where('id', id)
  }

  async actualizar(id, datos) {
    const usuario = await Usuario.findBy('id', id)
    if (usuario) {
      usuario.merge(datos)
      await usuario.save()
      return usuario
    } else {
      return { error: 'Usuario no encontrado' }
    }
  }

  async eliminar(id) {
    const usuario = await Usuario.findBy('id', id)
    if (usuario) {
      await usuario.delete()
      return 'usuario eliminado'
    } else {
      return 'usuario no encontrado'
    }
  }

  async conteo() {
    const usuarios = await Usuario.query()
    return {
      total: usuarios.length,
      usuarios,
    }
  }
}

export default UsuarioService
