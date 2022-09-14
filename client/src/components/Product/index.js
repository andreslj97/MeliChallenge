import React,{useState,useContext,useEffect} from 'react';
import { useParams } from "react-router-dom"
import styles from './product.module.css'
import { ApiContext } from '../ApiProvider/ApiProvider';
import formatPrice from '../../Utils/formatPrice';

const Product = () => {
    const[ data, setData ] = useState({})
    const { id } = useParams();
    const context = useContext(ApiContext)

    useEffect(() => {
        (async ()=>{
            let dataProducts = await context.getProduct(id);
            setData(dataProducts)
        })()
    },[id])
    
    return(
        <div className={styles.background}>
            {Object.hasOwn(data, 'id') ?
                <div className={styles.productWrapper}>
                    <div className={styles.principal}>
                        <div className={styles.wrapperImage}>
                            <img className={styles.image} src={`${data.picture[0].secure_url}`} alt={`${data.picture[0].id}`}/>
                        </div>
                        <div className={styles.buy}>
                            <span>{`${data.condition} - ${data.sold_quantity} vendidos`}</span>
                            <span className={styles.title}>{`${data.tittle}`}</span>
                            <span className={styles.price}>{`$ ${formatPrice(data.price)}`}</span>
                            <button className={styles.buyBtn}>Comprar</button>
                        </div>
                    </div>
                    
                    <div className={styles.description}>
                        <span className={styles.desTitle}>Descripción del producto</span>
                        <p className={styles.descriptionDetail}>{`${data.description}`}</p>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Product