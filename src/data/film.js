const fs = require("fs")

const saveToJSON = (films) => {
    fs.writeFileSync("./src/data/heroe.json", JSON.stringify(films, null, 2), {
        encoding: "utf-8",
    })
}
module.exports = saveToJSON