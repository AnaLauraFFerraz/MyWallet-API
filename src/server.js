import express from "express"
import cors from "cors"
import authRouter from "./routes/AuthRoutes"
import transactionsRouter from "./routes/TransactionsRoutes"

const server = express()
server.use(express.json())
server.use(cors())

server.use([authRouter, transactionsRouter])

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`)
})