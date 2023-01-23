import { Router } from "express"
import validateSchema from "../middleware/validateSchema.js"
import { transactionSchema } from "../schemas/TransactionsSchema.js"
import { authValidation } from "../middleware/AuthMiddleware.js"
import { listTransactions, newIncome, newExpense } from "../controller/Transactions.js"

const transactionsRouter = Router()

transactionsRouter.get("/home", listTransactions)
transactionsRouter.post("/nova-entrada", validateSchema(transactionSchema), authValidation, newIncome)
transactionsRouter.post("/nova-saida", validateSchema(transactionSchema), authValidation, newExpense)

export default transactionsRouter