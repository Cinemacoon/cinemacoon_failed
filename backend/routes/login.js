
const { Router } = require("express")
// const passport = require("passport");
const User = require("../models/User")
const router = Router()
const {check, validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.get('/login', function(req, res, next) {
    res.render('login');
    });

router.post("/login",

[
    check("username", "Wrong username").exists(),
    check("password", "Wrong password").exists()
],

    async (req, res) => {

        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Wrong data"
                })
            }

            const {username, password} = req.body

            const user = await User.findOne({username})

            if (!user) {
                return res.status(400).json({message: "No such user"})
            } else {

                const isMatch = bcrypt.compare(password, user.password)

                if (!isMatch) {
                    return res.status(400).json({message: "Password doesn't match"})
                }

                const jwtSecret = "livbwivbwivubwodihxzjd2309up32gf7vepifubcq]0uf20vr8hb"

                const token = jwt.sign(
                    {userId: user.id},
                    jwtSecret,
                    {expiresIn: "1h"}
                )
                
                res.json({token, userId: user.id})
            }

        } catch (error) {
            console.log(error)
        }
    
    });    



module.exports = router