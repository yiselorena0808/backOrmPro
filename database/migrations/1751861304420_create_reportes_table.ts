import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reportes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_reporte')
      table.integer('usuario_id').unsigned().references('usuarios.id').onDelete('SET NULL')
      table.string('nombre_usuario', 100)
      table.string('cargo', 100)
      table.string('cedula', 20)
      table.date('fecha')
      table.text('lugar')
      table.text('descripcion')
      table.text('imagen')
      table.text('archivos')
      table.string('estado', 50)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
