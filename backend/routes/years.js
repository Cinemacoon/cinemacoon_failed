const { Router } = require("express")
const router = Router()


router.get('/years', function(req, res, next) {
    res.render('years');
    });

module.exports = router