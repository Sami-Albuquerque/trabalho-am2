const express = require("express");
const router = express.Router();
const {getAboutTeam} = require("./utils/utils");
const fs = require("fs");

let text = [];

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render("pages/home");
});

router.get('/about', (req, res) => {
    res.render('pages/about', { usuarios: getAboutTeam() })
});

router.get('/slides', (req, res) => {

    let file = "C:/Users/samir/OneDrive/Documentos/trabalho-am2/meuarquivo.csv";

    readText(req, res, file);
    console.log(text);

    res.render('pages/slides', { texts: text });
});

//tentei separar essa função e colocar no utils.js pra ficar separadinho, mas o retorno vinha vazio por motivos que não consegui descobrir, então deixei aqui
function readText(req, res, fileName) {
    if (req.url === "/slides") {
        fs.readFile(fileName, 'utf8', function (error, contentFile) {
            if (error) {
                console.log(error);
            } else {
                //console.log("foi");
            }
            text = contentFile.split("#");
            res.end();
            //console.log(texts);
        });
    }
}

module.exports = router;