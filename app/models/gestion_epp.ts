import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class GestionEpp extends BaseModel {
   public static table = 'gestion_epp'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare apellido: string

  @column()
  declare cedula: string

  @column()
  declare cargo: string

  @column()
  declare productos: string

  @column()
  declare cantidad: string

  @column()
  declare importancia: string

  @column()
  declare estado: string | null

  @column()
  declare fecha_creacion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  
}
