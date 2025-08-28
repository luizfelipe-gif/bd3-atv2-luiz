const database = "BD3-NoSQL-Produtos"
const collection = "bd3-nosql-atv2"
use(database)
db.createCollection(collection)

//      Insert de produtos
db['bd3-nosql-atv2'].insertMany(
    [
        {
            "codigo_produto": 1,
            "nome": "Fone de Ouvido Bluetooth",
            "preco": 249
        },
        {
            "codigo_produto": 2,
            "nome": "Smartwatch Esportivo",
            "preco": 799
        },
        {
            "codigo_produto": 3,
            "nome": "Teclado Mecânico RGB",
            "preco": 389
        },
        {
            "codigo_produto": 4,
            "nome": "Câmera de Segurança Wi-Fi",
            "preco": 645
        },
        {
            "codigo_produto": 5,
            "nome": "Liquidificador Turbo",
            "preco": 199
        },
        {
            "codigo_produto": 6,
            "nome": "Monitor LED 24 polegadas",
            "preco": 999
        },
        {
            "codigo_produto": 7,
            "nome": "Mochila Executiva Impermeável",
            "preco": 159
        },
        {
            "codigo_produto": 8,
            "nome": "Caixa de Som Portátil",
            "preco": 329
        },
        {
            "codigo_produto": 9,
            "nome": "Aspirador de Pó Vertical",
            "preco": 875
        },
        {
            "codigo_produto": 10,
            "nome": "Cadeira Gamer Reclinável",
            "preco": 949
        }
    ]
)