import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./typeorm/entity/User";

createConnection().catch(error => console.log(error));

import express from 'express'

const app: express.Express = express()
const port = 8081

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept")
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router: express.Router = express.Router()

router.get('/api/getTest', (req: express.Request, res: express.Response) => {
    res.send(req.query)
})

app.use(router)
app.listen(port, () => {console.log(`express.back listening on port ${port}.`)})