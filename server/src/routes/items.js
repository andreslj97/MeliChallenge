require('dotenv').config()
const fetch = require('node-fetch');
const express = require('express')
const server = express.Router()
const { cacheInit } = require('../middleware/cache')
const { getProductMeli,getProductDescMeli } = require('../providers/meli');

//Function for save cache according to route
const setCache = (config={routes:[]})=>{
    config.routes.map(route => {
        server.get(
            route,
            cacheInit
        )
    })
}

//Set routes for save cache memory 
setCache({routes:['/api/items','/api/items/:idProduct']})

//Route for get all products according to search param
server.get('/api/items',(req, res) => {
    const product = req.query.q;
    fetch(`${process.env.URLMELI}/sites/MLA/search?q=${product}`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then((product) =>{
        const results = product.results
        if(results.length > 0){
            let categories = results.map((item)=>{return item.category_id}); 
            const responseData = {
                "author": JSON.parse(process.env.AUTOR),
                categories,
                "items": results
            }
            res.status(200).send(responseData);
        } else {
            throw "Product Not found"
        }
    })
    .catch( err => {
        res.status(404).send(err);
    })
})


//Route for get product
server.get('/api/items/:idProduct',(req, res) => {
    const idProduct = req.params.idProduct;
    
    const getAttribute = (attributes,name)=>{
        const valuesAttr = attributes.filter((objAttr)=>{
            return objAttr.id == name
        }).map((item)=>{return item.value_name})
        if(valuesAttr.length > 0){
            return valuesAttr[0]
        }
    }
    
    Promise.all([
        server.getProduct(idProduct),
        server.getProductDesc(idProduct)
    ]).then((response)=>{
        let dataProduct = response[0]
        let descriptionProduct = response[1]
        const {id,title,currency_id,price,sold_quantity,shipping,pictures,attributes} = dataProduct
        const responseData = {
            "author": JSON.parse(process.env.AUTOR),
            "item": {
                "id":id,
                "tittle":title,
                "price":price,
                "picture":pictures,
                "free_shipping":shipping,
                "sold_quantity":sold_quantity,
                "condition": getAttribute(attributes,'ITEM_CONDITION'),
                "description":descriptionProduct.plain_text
            }
        }
        res.status(200).send(responseData);
    }).catch(err=>{
        res.status(404).send(err);
    })
    
})

//Intance services providers
server.getProduct = (idProduct)=>getProductMeli(idProduct)
server.getProductDesc = (idProduct)=>getProductDescMeli(idProduct)

module.exports = server