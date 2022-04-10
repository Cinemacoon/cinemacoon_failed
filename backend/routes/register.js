
const { Router } = require("express")
// const passport = require("passport");
const User = require("../models/User")
const router = Router()
const {check, validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")

router.post('/reg', 

    [
        check("email", "Email's not cool").isEmail(),
        check("password", "Password's not cool").isLength({min: 6})
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

            const {username, email, password, dor} = req.body

            const nameIsUsed = await User.findOne({username: username})
            const emailIsUsed = await User.findOne({email: email})
            
            if (nameIsUsed) {
                return res.status(300).json({message: "Username is already taken, bro."})
            } else if (emailIsUsed) {
                return res.status(300).json({message: "Email is already taken, bro."})
            } else {

                // BASIC REGISTRATON //

                const hashedPassword = await bcrypt.hash(password, 12)

                const user = new User({
                    username, email, password: hashedPassword
                })

                await user.save()
                res.status(201).json({message: "That's cool, bro. Welcome."})



                //-- PASSPORT REGISTRATION --//
                
                // User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user) {
                //     if (err) {
                //         console.log(err);
                //         res.redirect("/reg");
                //     } else {
                //         passport.authenticate("local", {
                //             successRedirect: "/login",
                //             failureRedirect: "/reg"
                //         });
                //         res.status(201).json({message: "That's cool, bro. Welcome."})
                //     }
                //     });
                }
                
    
            } catch (error) {
                console.log(error)
            }
    });



module.exports = router