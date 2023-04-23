import { Router } from "express"
import { authValidation } from "../middleware/AuthMiddleware.js"
import validateSchema from "../middleware/validateSchema.js"
import { signupSchema, signinSchema } from "../schemas/AuthSchema.js"
import { signUp, signIn, signOut } from "../controller/Auth.js"

const authRouter = Router()

authRouter.post("/cadastro", validateSchema(signupSchema), signUp)
authRouter.post("/", validateSchema(signinSchema), signIn)
authRouter.post("/sair", authValidation, signOut);

export default authRouter