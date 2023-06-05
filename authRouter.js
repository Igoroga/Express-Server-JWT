const Router = require('express')
const router = new Router()
const controler = require('./authControlle')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post("/registration", [
    check('username', 'no simbol').notEmpty(),
    check('password', 'no simbol 0-10').isLength({min:4, max:10})
] ,controler.registration)
router.post("/login", controler.login)
router.get("/users", roleMiddleware(['ADMIN']), controler.getUsers)

module.exports = router