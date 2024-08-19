const axios = require('axios')
const jwt = require('../utils/jwtUtil')

const validationUrl = '' //ex: https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration'

const getSigninKey = async (kid) => {
    const response = await axios.get(validationUrl)
    const jwkUri = response.data.jwks_uri

    const Keyresponse = await axios.get(jwkUri)
    const keys = Keyresponse.data.keys

    return keys.find(key => key.kid === kid)
 }

 exports.validateToken = async (token) => {
    const decodedToken = jwtUtil.decodedToken(token)
    if(!decodedToken) {
        return null
    }

    const signinKey = await getSigninKey(decodedToken.header.kid)

    if (!signinKey) {
        return null
    } 

    const publicKey =`` //ex: -----BEGIN CERTIFICATE-----\n${signingKey.x5c[0]}\n-----END CERTIFICATE-----

    return jwtUtil.varifyToken(token, publicKey)
 }