var db = require('../../DB.js')

exports.racaoMensal = function(req, res) {

    const { id } = req.params
    const data = req.body

    let sql = `SELECT SUM(preco*quantidade) AS somaPQ FROM racao WHERE usuario_fk = "${id}" AND (SELECT EXTRACT(YEAR_MONTH FROM data)) = "${data.data}"`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
}

exports.compra = function(req, res) {
    const racao = req.body

    let post = { title: 'Post Usuario', body: 'Inserindo uma nova compra' };
    let sql = `insert into racao(nome,quantidade,preco,data,usuario_fk)
     values("${racao.nome}","${racao.quantidade}","${racao.preco}","${racao.data}","${racao.usuario_fk}");`;
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });

}