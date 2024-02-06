const {createPool}=require("mysql2/promise");

const pool=createPool(
    {
        host:"localhost",
        database:"peliculas",
        user:"root",
        password:"",
    }
)
module.exports=pool;