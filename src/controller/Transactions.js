import dayjs from "dayjs"
import { ObjectId } from "mongodb"
import db from "../config/database.js"

export async function listTransactions(req, res) {
    try {
        const userSession = await db.collection("users").findOne({ _id: session.userId })

        delete userSession.password

        res.send(userSession)
    } catch (err) {
        res.status(500).send(err)
    }
}

export async function newIncome(req, res) {
    const { value, description } = req.body;
    const { user } = res.locals;    
    const date = dayjs().format("DD/MM");

    await db.collection("transactions").insertOne({
        value,
        description,
        type,
        date,
        userId: new ObjectId(user._id)
      })
}

export async function newExpense(req, res) { }