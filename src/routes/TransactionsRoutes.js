import { Router } from "express"
import { listTransactions, newIncome, newExpense } from "../controller/Transactions.js"
import { incomeSchema, expenseSchema } from "../schemas/TransactionsSchema.js"
import validateSchema from "../middleware/validateSchema.js"
import { authValidation } from "../middleware/AuthMiddleware.js"

const transactionsRouter = Router()

transactionsRouter.get("/home", listTransactions)
transactionsRouter.post("/nova-entrada", authValidation, validateSchema(incomeSchema), newIncome)
transactionsRouter.post("/nova-saida", validateSchema(expenseSchema), newExpense)

export default transactionsRouter