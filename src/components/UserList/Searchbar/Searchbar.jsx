import React from 'react'
import s from './Searchbar.module.scss';


function Searchbar(props) {

    return (    
        <form action="" method="get" className={s.search}>
            Input username: 
            <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder="Type username ..."
                onChange={(event) => props.setValue(event.target.value)} 
            />
        </form>
    )
}

export default Searchbar
