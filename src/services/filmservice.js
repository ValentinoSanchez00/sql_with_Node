const pool = require("../bd/bd");
const saveToJSON = require("../data/film");
const { film } = require("../data/film")

const getallfilms = async () => {
    console.log("llega a servicio")
    const films = await pool.query("select * from films")
    return films[0];
}
const getonefilmsbyid = async (id) => {
    console.log("llega a servicio")
    const films = await pool.query("select * from films where id=" + id)
    return films[0];
}
const getonefilmsbyname = async (name) => {
    console.log("llega a servicio")
    const films = await pool.query("select * from films where title='" + name + "'")
    return films[0];
}
const createonefilm = async (body) => {
    console.log(body)
    const { title, description, score, director } = body
    const films = await pool.query('insert into films values(?,?,?,?,?)', [
        "",
        title,
        description,
        score,
        director,])



}


const updatefilm = async (body, id) => {
   console.log(body)
    const { title, description, score, director } = body
    const films = await pool.query('update films set title=?,description=?,score=?,director=? where id=?', [
        
        title,
        description,
        score,
        director,
        id,])
        return body
  


}



module.exports = {
    getallfilms,
    getonefilmsbyid,
    getonefilmsbyname,
    createonefilm,
    updatefilm
}