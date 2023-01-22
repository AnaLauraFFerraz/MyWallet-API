import db from "../config/database"

export async function authValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)

    try {
        const checkSession = await db.collections("sessions").findOne({ token })

        if(!checkSession) return res.status(401).send("Sem autorização para cadastro")

        res.locals.session = checkSession
        
        next()
    } catch (err) {
        res.status(500).send(err)
    }
}