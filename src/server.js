import express from "express"
import cors from "cors"

import authRouter from "./routes/AuthRoutes.js"
import transactionsRouter from "./routes/TransactionsRoutes.js"

const server = express()

server.use(express.json())
server.use(cors())
server.use([authRouter, transactionsRouter])

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})