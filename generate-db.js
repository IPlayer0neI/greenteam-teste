const fs = require('fs');
const path = require('path');

const catalogo = require('./catalogo_db.json'); 
const categorias = require('./categorias_db.json');
const quadideal = require('./quad_ideal_db.json');

const db = {
    catalogo: catalogo, 
    categorias: categorias,
    quadideal: quadideal 
};

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2));

console.log('db.json gerado com sucesso!');