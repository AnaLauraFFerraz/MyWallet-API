import { Router } from "express"
import { signUp, signIn } from "../controller/Auth.js"
import { signupSchema, signinSchema } from "../schemas/AuthSchema"
import validateSchema from "../middleware/validateSchema.js"

const authRouter = Router()

authRouter.post("/sign-up", validateSchema(signupSchema), signUp)
authRouter.post("/sign-in", validateSchema(signinSchema), signIn)

export default authRouter