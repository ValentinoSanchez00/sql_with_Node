const router = require("express").Router();

const pool= require("../../bd/bd")

const filmsController=require("../../controllers/filmcontroller");

router.get("/", filmsController.getallfilms)
router.get("/id/:id", filmsController.getonefilmsbyid)
router.get("/name/:name", filmsController.getonefilmsbyname)
router.post("/", filmsController.createonefilm)
router.put("/:id", filmsController.updatefilm)




module.exports=router;