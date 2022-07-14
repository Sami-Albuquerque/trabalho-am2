const express = require("express");
const router = express.Router();
const { getAboutTeam, readText } = require("./utils/utils");

//Importe cada uma das funcoes presentes no arquivo de modulo users.js
//const {insertUsers,insertUser,delUser,listUsers,findUser} = require("./model/users");


router.use(express.static('public')); //Você usa o USE() para inserir um middleware no Express

router.get('/', (req, res) => {
    //REQUEST (REQ) - O que vem do forntend para o backend
    //RESPONSE (RES) - O que vai do backend para o Forntend

    res.render("pages/home");


}); // ()={} sendo utilizada como callback

router.get('/about', (req, res) => {
    res.render('pages/about', { usuarios: getAboutTeam() })
});

router.get('/slides', (req, res) => {

    let file = "C:/Users/samir/OneDrive/Documentos/trabalho-am2/meuarquivo.csv";

    const text = readText(req, res, file);

    res.render('pages/slides', { texts: text });
})

module.exports = router;