import "reflect-metadata"
import {connectDatabase} from "./connect"
import {Connection} from 'typeorm'
import {User} from './typeorm/entity/User'
import express from 'express'

let connection: Connection
connectDatabase().then(c => { connection = c })

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

router.get('/', (req: express.Request, res: express.Response) => {
    res.send({ appName: 'express', port: port })
})

router.get('/users', (req: express.Request, res: express.Response) => {
    connection.getRepository(User)
    .createQueryBuilder("user")
    .getMany()
    .then(users => {
        res.send(users)
    })
})

router.get('/user/:id', (req: express.Request, res: express.Response) => {
    connection.getRepository(User)
    .createQueryBuilder("user")
    .where(
        "user.id = :id", { id: req.params.id }
    )
    .getOne()
    .then(user => {
        user ? res.send(user) : res.sendStatus(404)
    })
})

router.post('/users', (req: express.Request, res: express.Response) => {
    connection.getRepository(User)
    .createQueryBuilder("user")
    .insert()
    .into(User)
    .values(req.body)
    .execute()
    .then(users =>
        res.send(users)
    )
})

app.use(router)
app.listen(port, () => {console.log(`express.back listening on port ${port}.`)})