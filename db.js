const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.serialize(function() {

    //Criar tabela

    db.run(`
        
        CREATE TABLE IF NOT EXISTS ideas(

            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT        
        
            )`
    )

    // Inserir dados

    const query = `
    
    INSERT INTO ideas(

        image,
        title,
        category,
        description,
        link

    ) VALUES (?,?,?,?,?)`

    const values = [
    
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Curso de Programação",
    "Estudo",
    "Em um dia ensolarado, tarde da manhã, quando a lua cheia era minguante, tudo era nada diferente do igual. A temperatura alta congelava o vento, que de desmotivado, motivava-se a soprar sem se por em movimento.",
    "https://www.google.com"
    
    ]       

    /*
    
    db.run(query,values,function(err){
        if(err) return console.log(err)

        console.log(this)

    })*/

    // MOSTRAR DADOS DA TABELA

    db.all(`SELECT * FROM ideas`, function(err,rows){

        if(err) return console.log(err)

        console.log(rows,this)

    })/*

    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
        if(err) return console.log(err)

        console.log("Deletado")

    })*/


})

module.exports = db