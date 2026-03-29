use("ecommerce");
// db.sales.find()
db.sales.createIndex({quantity:1}) // cria um índice no campo quantity
db.sales.getIndexes() // mostra os índices existentes