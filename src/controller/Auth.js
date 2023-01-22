import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid"
import db from "../config/database"

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body

    const passwordHashed = bcrypt.hashSync(password, 10)

    try {
        await db.collection("users").insertOne({ name, email, password: passwordHashed })
        res.status(201).send("SignUp OK!")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await db.collection("users".findOne({ email }))

        if (!user) return res.status(400).send("Usuário ou senha incorretos")

        const isPassCorrect = bcrypt.compareSync(password, user.password)

        if (!isPassCorrect) return res.status(400).send("Usuário ou senha incorretos")

        const token = uuidV4();
        await db.collection("sessions").insertOne({ token, userId: user._id })

        return res.status(200).send(token)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
