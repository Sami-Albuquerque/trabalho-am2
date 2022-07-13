const express = require("express");
const router = express.Router();
const fs = require("fs");

//Importe cada uma das funcoes presentes no arquivo de modulo users.js
//const {insertUsers,insertUser,delUser,listUsers,findUser} = require("./model/users");
let text = [];

function readText(req, res, fileName) {
    if (req.url === "/slides") {
        fs.readFile(fileName, 'utf8', function (error, contentFile) {
            if (error) {
                console.log(error);
            } else {
                //console.log(contentFile);
            }
            text = contentFile.split("#");
            res.end();
        });
    }
    return true;
}


router.use(express.static('public')); //Você usa o USE() para inserir um middleware no Express

router.get('/', (req, res) => {
    //REQUEST (REQ) - O que vem do forntend para o backend
    //RESPONSE (RES) - O que vai do backend para o Forntend

    res.render("pages/home");


}); // ()={} sendo utilizada como callback

router.get('/about', (req, res) => {
    res.render('pages/about', { usuarios: getAboutTeam() })
});

function getAboutTeam() {
    let aboutTeam = [
        {
            name: "Samiris Sampaio de Albuquerque",
            email: "meuemail@gmail.com",
            avatar: "/imgs/euzinha.jpg"
        },
    ];
    return aboutTeam;
}

router.get('/slides', (req, res) => {

    let file = "C:/Users/samir/OneDrive/Documentos/trabalho-am2/meuarquivo.csv";
    let status;

    status = readText(req, res, file);
    if (!status) {
        res.write("Problemas ao acessar o arquivo!");
        res.end();
    }

    res.render('pages/slides', { texts: text });
})

module.exports = router;