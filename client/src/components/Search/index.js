import styles from './search.module.css'
import React,{useState,useContext,useEffect} from 'react';
import { useSearchParams } from "react-router-dom"
import { ApiContext } from '../ApiProvider/ApiProvider';
import ListProduct from '../ListProduct';

const Search = ({queryParams}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const[items, setItems] = useState([])
    const context = useContext(ApiContext)

    useEffect(() => {
        (async ()=>{
            if(queryParams.length > 0) {
                let dataProducts = await context.getAllProducts(queryParams);
                setItems(dataProducts.items)
                setSearchParams({
                    search: queryParams
                })
            }
        })()
    },[queryParams])

    return(
        <div className={styles.search}>
            <div className={styles.searchWrapper}>
                <h1>Búsqueda</h1>
                {items.length > 0?
                    <ListProduct productList={items}/>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Search