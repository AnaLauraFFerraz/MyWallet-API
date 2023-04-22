import { Router } from "express"
import validateSchema from "../middleware/validateSchema.js"
import { transactionSchema } from "../schemas/TransactionsSchema.js"
import { authValidation } from "../middleware/AuthMiddleware.js"
import { listTransactions, newIncome, newExpense } from "../controller/Transactions.js"

const transactionsRouter = Router()

transactionsRouter.get("/home", authValidation, listTransactions)
transactionsRouter.post("/nova-transacao/entrada", authValidation, validateSchema(transactionSchema), newIncome)
transactionsRouter.post("/nova-transacao/saida", authValidation, validateSchema(transactionSchema), newExpense)

export default transactionsRouter