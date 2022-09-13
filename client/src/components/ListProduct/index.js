import React from 'react';
import styles from './itemProduct.module.css'
import { Link } from "react-router-dom"
import formatPrice from '../../Utils/formatPrice';

const ListProduct = ({productList}) => {
    console.log('PRODUCTS',productList);
    return(
        <>
            {
                productList.map((product) =>{
                    let {id,title,thumbnail,price,address} = product
                    return(                    
                        <Link className={styles.itemProduct} to={`/api/items/${id}`}>
                            <img src={thumbnail}/>
                            <div className={styles.descProd}>
                                <span className={styles.price}>{`$ ${formatPrice(price)}`}</span>
                                <span className={styles.title}>{title}</span>
                            </div>
                            <span className={styles.ubication}>{address.state_name}</span>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ListProduct