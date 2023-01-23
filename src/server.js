import express from "express"
import cors from "cors"

import authRouter from "./routes/AuthRoutes.js"
import transactionsRouter from "./routes/TransactionsRoutes.js"

const server = express()

server.use(express.json())
server.use(cors())
server.use([authRouter, transactionsRouter])

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})