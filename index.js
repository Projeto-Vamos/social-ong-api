const express = require("express")
const mongoose = require("mongoose")
const requireDir = require("require-dir")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")

const app = express() //gerenciador de rotas
app.use(express.json()) //gerenciando rotas em formato Json
app.use(bodyParser.urlencoded({ extended: true })) //configurado para analisar dados no formato json da url
app.use(bodyParser.json()) //configurado para analisar dados no formato json
app.use(cors())

app.use("/src/uploads", express.static(path.join(__dirname, "src/uploads")))
app.use("/assets", express.static(path.join(__dirname, "src/assets")))

//conexão com banco de dados
//mongoose.connect("mongodb+srv://dbJoao:ecmascript@cluster0.gfubd.mongodb.net/dbong?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

try {
  mongoose.connect(
    "mongodb://projetovamos:projetovamos2021:54975@mgeonosis.mongodb.umbler.com/projetovamos",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    console.log(' ESSA PORRA CONECTOU! ');

} catch (e) {
  console.log("ERRO:  ", e)
}

//centraliza os models nessa pasta
requireDir("./src/models")

//rotas
app.use("/sistema", require("./src/routes/routes"))

//porta
const PORT = process.env.PORT || 8088
app.listen(PORT, () => {
  console.log(`Server initialized com porta ${PORT}`)
})
