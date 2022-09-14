import React,{  useState } from "react";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [status, setStatus] = useState('initial')
    const [data, setData] = useState({})

    const getProduct = async(idProduct) => {
        try {
            const productResult = await fetch(`http://localhost:3001/api/items/${idProduct}`)
            .then(response => response.json())
            setStatus('done');
            setData(productResult.item)
            return productResult.item
        } catch (err) {
            setStatus(err);
        }
    }

    const getAllProducts = async(query) =>{
        if(typeof(query) === 'string' && query.length > 0) {
            try {
                const searchResult = await fetch(`http://localhost:3001/api/items?q=${query}`)
                .then(response => response.json())
                setStatus('done');
                setData(searchResult.items)
                return searchResult
            } catch (err) {
                setStatus(err);
            }
        }else{
            return
        } 
    }

    return(
        <ApiContext.Provider value={{status,data,getAllProducts,getProduct}}>
            {children}
        </ApiContext.Provider>
    )
}