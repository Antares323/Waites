import React from 'react'
import s from './Pagination.module.scss'
import { NavLink } from 'react-router-dom'

const Pagination = ({userPerPage, totalUsers, paginate}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={s.pagination}>
            <ul className={s.list}>
                {
                    pageNumbers.map(number => (
                        <li className={s.item} key={number}>
                            <NavLink to={"/" + number} className={s.link} onChange={ () => paginate(number)}>
                                {number}
                            </NavLink>
                        </li>
                    ))   
                }
            </ul>
        </div>
    )
}

export default Pagination
