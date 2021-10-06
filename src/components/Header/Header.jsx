import React from 'react'
import s from './Header.module.scss';

function Header() {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="./img/waites-block-logo.png" alt="logo" />
            </div>
        </div>
    )
}

export default Header
