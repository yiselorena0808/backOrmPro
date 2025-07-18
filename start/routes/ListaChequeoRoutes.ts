import Route from "@adonisjs/core/services/router"
import ListaChequeoController from "../../app/controller/ListaChequeoController.js"

const lista = new ListaChequeoController()

Route.post('/crearListaChequeo', lista.crearLista)
Route.get('/listarListasChequeo', lista.listarListas)
