const router = require("express").Router();

const routerfilms = require("./filmroutes")

router.use("/v1/films", routerfilms)

module.exports = router;