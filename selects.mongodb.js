const database = "BD3-NoSQL-Produtos"
const collection = "bd3-nosql-atv2"
use(database)
db.createCollection(collection)

//      Maiores que 700
db['bd3-nosql-atv2'].find(
    {preco:{$gt:700}}
).sort({preco:1})


//      Menores que 450
db['bd3-nosql-atv2'].find(
    {preco:{$lt:450}}
).sort({preco:-1})


//      Maior ou igual a 500 && Menor ou igual a 950
db['bd3-nosql-atv2'].find(
    {preco:{$gte:500}, preco:{$lte:950}}
).sort({preco:1})