import TopNav from '../TopNav'
import { useState } from 'react';
import { useSearchParams } from "react-router-dom"

const NotFound = ()=>{

    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('search') || "");

    const isPageSearch = false

    return(
        <>
            <TopNav isPageSearch={isPageSearch} setSearchParams={setSearchParams} setQuery={setQuery} query={query}/>
            <h1>NOT FOUND</h1>
        </>
    )
}

export default NotFound