import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid"
import db from "../config/database"

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body

    const passwordHashed = bcrypt.hashSync(password, 10)

    await db.collection("users").insertOne()

    try {
        await db.collection("users").insertOne({ name, email, password: passwordHashed })
        res.status(201).send("SignUp OK!")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

