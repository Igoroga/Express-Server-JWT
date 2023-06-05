const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function(roles){
return function (req, res, next) {
if (req.method === 'OPTIONS') {
    next()
}
try {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
        return res.status(400).json({message: 'Invalid token'});
    }
    const {roles: userRoles} = jwt.verify(token, secret)
    let hasRoles = false
    userRoles.forEach(element => {
        if(roles.includes(element)){
            hasRoles = true
        }
    });
    if(!hasRoles){
        return res.status(400).json({message: 'No admin role', error})
    }
    next()
} catch (error) {
    console.log(error);
    return res.status(400).json({message: 'No admin role', error})
}
}
}