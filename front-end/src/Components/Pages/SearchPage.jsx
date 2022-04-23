import React, { useContext } from 'react'
import { AppContext } from '../../Context/searchContext';

const SearchPage = () => {

    const { setSearch_2, serchValue } = useContext(AppContext);

    return <>
        <div>
            {serchValue}
        </div>

    </>
}

export default SearchPage