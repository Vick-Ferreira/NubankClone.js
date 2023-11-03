const e = require('express');
const express = require('express')//chamando server express
const app = express();// app que ira executar o server express
const PORT = 5000; //porta que o servidor irá rodar
//a função principal do meu servidorweb é acessar conteudo estátido desse caminho ...
app.use(express.static('Web'));// onde se encontra o conteudo estático



//Recurso de upload.

const multer = require('multer'); //chamando multer
const storage = multer.diskStorage({
    destination: function(res, arquivo, callback){
        callback(null, 'Web/img');  //onde os uploads serão armazenados 
    },
    filename: function(req,arquivo,callback){
        callback(null,arquivo.originalname);
    }
})

const upload = multer({storage: storage});
app.post('/upload', upload.single('arquivo'), (req,res) => {
    res.status(200).send();
})

const msg = `Servidor rrodando na porta : ${PORT}`;
app.listen(PORT, () => console.log(msg));