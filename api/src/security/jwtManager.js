const jwt = require('jsonwebtoken')

const secret = process.env.SECRET || 'hlu60kkasdn32jiofh0c31z64m3z1wkp7vf';

const generateAccessToken = (id, name, dni) => {
    return jwt.sign({
        id: id,
        name: name,
        dni: dni,
    }, secret, {expiresIn: '5m'})
}

const validateToken = (req, res, next) => {
    const accessToken = req.headers['authorization']

    if(!accessToken)
        res.status(401).send({ status: 'Error', message: 'Missing token: Failed authentication' })
    
    jwt.verify(accessToken, secret, (error) => {
        if(error) {
            console.log('Invalid access token: ', error.message)
            res.status(400).send({ status: 'Error', message: 'Invalid token' })
            return null
        }
        else {
            next()
        }
    })
}

module.exports = {
    generateAccessToken,
    validateToken
}