import { ObjectId } from "mongodb"
import db from "../config/database"

export async function listTransactions(req, res) {
    const userSession = await db.collection("users").findOne({ _id: session.userId })
    
    delete userSession.password

    res.send(userSession)
}

export async function newIncome(req, res) {}

export async function newExpense(req, res) {}