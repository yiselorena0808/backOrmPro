import Usuario from '#models/usuario'
import bcrypt from 'bcryptjs'

class UsuarioService {
async register(
  nombre: string,
  apellido: string,
  nombre_usuario: string,
  correo_electronico: string,
  cargo: string,
  contrasena: string,
  confirmacion: string
) {
  const existente = await Usuario.findOne({ where: { correo_electronico } });
  if (existente) {
    return { mensaje: 'Correo ya está registrado' };
  }
  if (contrasena !== confirmacion) {
    return { mensaje: 'Las contraseñas no coinciden' };
  }
  const hashedPassword = await bcrypt.hash(contrasena, 10);
  const user = await Usuario.create({
    nombre,
    apellido,
    nombre_usuario,
    correo_electronico,
    cargo,
    contrasena: hashedPassword
  });
  return { mensaje: 'Registro correcto', user };
}
  
  async login (correo_electronico:string, contrasena:string){
   const user = await Usuario.findBy('correo_electronico',correo_electronico)
   if(user){
   const resp = await bcrypt.compare(contrasena,user.contrasena)
   if(resp){
   return('login correcto')
   }else{
   return('contraseña incorrecta')
   }
   }else{
   return('Usuario no encontrado')
   }
}

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
