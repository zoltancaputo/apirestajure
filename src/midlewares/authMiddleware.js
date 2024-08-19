const azureAuthService = require('../services/azureAuthService')

const validateAzureToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']

    if(!authHeader) {
        return res.status(401).send('Authorization header missing')
    }

    const token = authHeader.split(' ')[1] //remove "Bearer" get the token

    try{
        const user = await azureAuthService.validateToken(token)
        if(!user) {
            return res.status(401).send('Invalid token')
        }

        req.user = user 
        next()

    } catch (error) {
        return res.status(500).send('Failed to validate token')

    }

}

   module.exports = validateAzureToken