const jwt = require('jsonwebtoken')


const jwtVerify = (req, res, next) => {
    const token = req.body.token
    if (!token) return res.json({ error: true, message: "Token not found" })
    jwt.verify(token, 'secretkey', (err, data) => {
        try {
            if (err) throw err
            req.bebas = data
            req.fikri = 'fikri'
            next()
        } catch (err) {
            res.json({
                error: true,
                message: err.message,
                detail: error
            })
        }
    })
}

module.exports = jwtVerify