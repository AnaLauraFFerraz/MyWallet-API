import joi from "joi"

export const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
})

export const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
})