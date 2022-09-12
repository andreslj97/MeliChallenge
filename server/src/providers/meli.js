const fetch = require('node-fetch');
require('dotenv').config()

//Function provider of information product for id
const getProductMeli = (idProduct) => {
    return fetch(`${process.env.URLMELI}/items/${idProduct}`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(data =>{return data})
    .catch( err => {console.log('error', err)})
}

//Function provider of description product for id
const getProductDescMeli = (idProduct) => {
    return fetch(`${process.env.URLMELI}/items/${idProduct}/description`,{method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(data =>{return data})
    .catch( err => {console.log('error', err)})
}

module.exports = {getProductMeli,getProductDescMeli}