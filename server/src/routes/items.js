const fetch = require('node-fetch');
const express = require('express')
const server = express.Router()
const { cacheInit } = require('../middleware/cache')

server.get(
    '/api/items',
    cacheInit
)

server.get('/api/items',(req, res) => {
    const product = req.query.q;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then((product) =>{
        const results = product.results
        if(results.length > 0){
            let categories = results.map((item)=>{return item.category_id}); 
            const responseData = {
                "author":{
                    "name": "Andres",
                    "lastname": "Lugo"
                },
                "categories": categories,
                "items": results
            }
            res.status(200).send(responseData);
        } else {
            throw "Product Not found"
        }
    })
    .catch( err => {
        console.log('error', err)
    })
})

server.get(
    '/api/items/:idProduct',
    cacheInit
)

server.get('/api/items/:idProduct',(req, res) => {
    const idProduct = req.params.idProduct;
    Promise.all([
        server.getProduct(idProduct),
        server.getProductDesc(idProduct)
    ]).then((response)=>{
        let dataProduct = response[0]
        let descriptionProduct = response[1]
        const {id,title,currency_id,price,condition,sold_quantity,shipping,pictures} = dataProduct
        const responseData = {
            "author":{
                "name": "Andres",
                "lastname": "Lugo"
            },
            "item": {
                "id":id,
                "tittle":title,
                "price":{
                    "currency":currency_id,
                    "amount":price,
                    "decimals":price
                },
                "picture":pictures,
                "condition":condition,
                "free_shipping":shipping,
                "sold_quantity":sold_quantity,
                "description":descriptionProduct.plain_text
            }
        }
        res.status(200).send(responseData);
    }).catch(err=>{
        console.log('error', err)
    })
    
})

server.getProduct = (idProduct) => {
    return fetch(`https://api.mercadolibre.com/items/${idProduct}`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(data =>{return data})
    .catch( err => {console.log('error', err)})
}

server.getProductDesc = (idProduct) => {
    return fetch(`https://api.mercadolibre.com/items/${idProduct}/description`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(data =>{return data})
    .catch( err => {console.log('error', err)})
}

module.exports = server