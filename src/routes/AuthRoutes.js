import { Router } from "express"
import validateSchema from "../middleware/validateSchema.js"
import { signupSchema, signinSchema } from "../schemas/AuthSchema.js"
import { signUp, signIn } from "../controller/Auth.js"

const authRouter = Router()

authRouter.post("/cadastro", validateSchema(signupSchema), signUp)
authRouter.post("/", validateSchema(signinSchema), signIn)

export default authRouter