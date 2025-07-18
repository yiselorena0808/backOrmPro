import Route from "@adonisjs/core/services/router"
import ReportesController from "../../app/controller/ReporteController.js"

const reporte = new ReportesController()

Route.post('/crearReporte', reporte.crearReporte)
Route.get('/listarReportes', reporte.listarReportes)
Route.get('/idReporte/:id', reporte.listarReporteId)
Route.put('/actualizarReporte/:id', reporte.actualizarReporte)
Route.delete('/eliminarReporte/:id', reporte.eliminarReporte)
Route.get('/conteoReportes', reporte.conteoReportes)
