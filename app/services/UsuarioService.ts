import bcrypt from 'bcryptjs'
import Usuario from '#models/usuario';
import jwt from "jsonwebtoken"

const SECRET = process.env.jwt_secret || 'secret11'

class UsuarioService {
async register(
    nombre: string,
    apellido: string,
    nombre_usuario: string,
    correo_electronico: string,
    cargo: string,
    contrasena: string,
    confirmacion: string
    id_tenat:number
  ) {
    const existente = await Usuario.query()
      .where('correo_electronico', correo_electronico)
      .first();

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
      contrasena: hashedPassword,
      id_tenat
    });

    return { mensaje: 'Registro correcto', user };
  }

  /*async login(correo_electronico: string, contrasena: string) {
    const user = await Usuario.query()
      .where('correo_electronico', correo_electronico)
      .first();

    if (!user) {
      return 'Usuario no encontrado';
    }

    const isValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isValid) {
      return 'contraseña incorrecta';
    }

    return { mensaje: 'login correcto', user };
  }*/

    async login(correo_electronico: string, contrasena: string){
    if (!correo_electronico || !contrasena){
      return "el email o password es obligatorio"
    }
    else {
      const resp = await Usuario.findBy('correo_electronico', correo_electronico)
      if(resp){
        const val = await bcrypt.compare(contrasena,resp.contrasena)
        if(val){
          return "contraseña incorreta"
        }
        const token = jwt.sign({
          id:resp.id,
          email:resp.correo_electronico,
          timestamp:Date.now()
        },
        SECRET,
        {
          expiresIn:'1h'
        }
        )
        return {token, resp}
      }
      else{
        return "el usuario no existe"
      }
    }
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
