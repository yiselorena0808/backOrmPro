import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PublicacionBlog extends BaseModel {
  public static table = 'publicaciones_blog'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare descripcion: string

  @column()
  declare imagen: string

  @column()
  declare archivo: string

  @column()
  declare fecha_creacion: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

