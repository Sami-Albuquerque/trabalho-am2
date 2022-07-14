const fs = require("fs");

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

function readText(req, res, fileName) {
    let text = [];

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
    return text;
}

module.exports = {
    getAboutTeam,
    readText
}