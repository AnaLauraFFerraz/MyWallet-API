import db from "../config/database.js"

export async function authValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(401).send("Informe o token!");

    try {
        const checkSession = await db.collection("sessions").findOne({ token })

        if (!checkSession) return res.status(401).send("Sem autorização")

        // const user = await db.collection("users").findOne({
        //     _id: session.userId,
        // });

        // if (!user) return res.sendStatus(401)

        res.locals.session = checkSession

        next()
    } catch (err) {
        res.status(500).send(err)
    }
}