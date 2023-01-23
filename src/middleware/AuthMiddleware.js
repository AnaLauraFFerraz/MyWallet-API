import db from "../config/database.js"

export async function authValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(401).send("Informe o token!");

    try {
        const checkSession = await db.collection("sessions").findOne({ token })
        console.log("checkSession ", checkSession._id)

        if (!checkSession) return res.status(401).send("Sem autorização")

        res.locals.session = checkSession

        const user = await db.collection("users").findOne({
            _id: checkSession.userId,
        });

        if (!user) return res.sendStatus(401)

        console.log("res.locals ", res.locals)

        next()
    } catch (err) {
        console.log("authValidation", err.message)
        res.sendStatus(500)
    }
}