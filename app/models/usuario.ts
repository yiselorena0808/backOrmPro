import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Reporte from './reporte.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare apellido: string

  @column()
  declare nombre_usuario: string

  @column()
  declare correo_electronico: string

  @column()
  declare cargo: string

  @column()
  declare contrasena: string

  @hasMany(() => Reporte)
  declare reportes: HasMany<typeof Reporte>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
