const express = require("express");
const app = express();

const bodyParse = require("body-parser")

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))

const router = require("./routes/v1/approutes")

app.use("/apifilms", router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escucahndo en puerto ${PORT} 😎`)
})