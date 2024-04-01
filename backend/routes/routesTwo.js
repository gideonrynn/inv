const db = require("../models");
const router = require("express").Router();

router.get('/routeTwo', (req, res) => {
    
    db.Template.find()
      .then(template => res.json(template))

});

module.exports = router;