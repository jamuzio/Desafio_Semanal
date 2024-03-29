import express from 'express'
import { WebController } from '../Controllers/WebController.js'
import { UserHasSesion } from '../Middleware/UserSesion.js'

const routerWeb = express.Router()


routerWeb.get('/', UserHasSesion ,WebController.AddNewProd)
routerWeb.get('/productos', UserHasSesion, WebController.ProdDisplay)
routerWeb.get('/productos-test', UserHasSesion, WebController.TestProdDisplay)
routerWeb.get('/login', WebController.Login)
routerWeb.get('/logout', WebController.Logout)
routerWeb.get('/registro', WebController.Registro)
routerWeb.get('/failRegister', WebController.failRegister)
routerWeb.get('/failLogin', WebController.failLogin)
//Rutas Duplicadas con metodo post por redirect de passport
routerWeb.post('/', UserHasSesion ,WebController.AddNewProd)
routerWeb.post('/login', WebController.Login)
routerWeb.post('/registro', WebController.Registro)
routerWeb.post('/failRegister', WebController.failRegister)
routerWeb.post('/failLogin', WebController.failLogin)

export default routerWeb 