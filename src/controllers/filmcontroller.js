const filmService=require("../services/filmservice");

const getallfilms= async(req, res) => {
    console.log("llega al controller")
   const allFilms= await filmService.getallfilms()
   res.json(allFilms)
   console.log(res)
}
const getonefilmsbyid= async(req, res) => {
    console.log("llega al controller")
    console.log(req.params.id)
   const oneFilms= await filmService.getonefilmsbyid(req.params.id)
   res.json(oneFilms)
   
}
const getonefilmsbyname= async(req, res) => {
    console.log("llega al controller")
   const oneFilms= await filmService.getonefilmsbyname(req.params.name)
   res.json(oneFilms)
   
}
const createonefilm = async(req, res) => {
  await res.json(filmService.createonefilm(req.body))
}
const updatefilm = async(req, res) => {
  await res.json(filmService.updatefilm(req.body,req.params.id))
}

module.exports={
    getallfilms,
    getonefilmsbyid,
    getonefilmsbyname,
    createonefilm,
    updatefilm
}