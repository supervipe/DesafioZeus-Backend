var db = require('../../DB.js')

exports.login = function(req, res) {

    const login = req.body

    console.log(login.email)
    let sql = `SELECT * FROM usuario WHERE usuario.email = "${login.email}" AND usuario.senha = "${login.senha}"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}

exports.cadastro = function(req, res) {
    const usuario = req.body

    let post = { title: 'Post Usuario', body: 'Criando usuario novo' };
    let sql = `insert into usuario(nome,email,senha,nascimento,genero,cachorro)
     values("${usuario.nome}","${usuario.email}","${usuario.senha}","${usuario.nascimento}","${usuario.genero}","${usuario.cachorro}");`;
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });

}

exports.mudarSenha = function(req, res) {
    const { id } = req.params
    const senha = req.body

    let sql = `UPDATE usuario SET senha = "${senha.senha}" WHERE id = ${id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}