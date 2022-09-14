import { useState, useRef, useEffect } from 'react';
import styles from './topnav.module.css'
import { Link, useSearchParams, useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

const TopNav = ({setQueryParams}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('search') || "");
    const [redirectPageSearch, setRedirec] = useState(true)
    const debounceRef = useRef()
    let navigate = useNavigate();

    const setParamUrlInputChange = (event) => {
        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(() =>{
            const newQuery = event.target.value;
            if(!redirectPageSearch){
                navigate('/items');
            }
            setQueryParams(newQuery)
            setQuery(newQuery)
        },500) 
    }

    const onQueryChange = (event) => {
        event.preventDefault();
        const newQuery = event.target[0].value;
        if(redirectPageSearch){
            navigate('/items');
        }
        setQueryParams(newQuery)
        setQuery(newQuery)
    }

    useEffect(() => {
        window.location.pathname == '/items' ? setRedirec(false) : setRedirec(true)
        if(query.length > 0) {
            setQueryParams(query)
        }
    },[])

    return(
        <>
            <div className={styles.navHeader}>
                <Link className={styles.navLogo} to="/"/>
                <form onSubmit={onQueryChange} className={styles.navWrapper}>
                    {redirectPageSearch ?
                         <>
                            <input type="text" onChange={setParamUrlInputChange} placeholder="Buscar productos, marcas y más…" className={styles.searchInput}/>
                         </>
                          :
                         <>
                            <input type="text" className={styles.searchInput} />
                         </>
                    }
                    <button type="submit" className={styles.navBtnSearch}>
                        <FaSearch/>
                    </button>
                </form>
            </div>
        </>
    )
}

export default TopNav