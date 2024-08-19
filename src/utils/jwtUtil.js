const jwt =require('jsonwebtoken')

exports.decodedToken = (token) => {
    return jwt.decode(token, { complete: true})
}

exports.verifyToken = (token, publicKey) => {
    try {
        return jwt.verify(token, publicKey, { algorithms: ['RS256']})
    } catch (error) {
        return null
    }
}