import React, { useState } from 'react'
import s from './UserList.module.scss'
import Cadrs from './Cards/Cards'
import Searchbar from './Searchbar/Searchbar'
import AddUser from './AddUser/AddUser'

const UserList = ({users, addUser, updateUsersList}) => {

    const [value, setValue] = useState('')

    const filtered = users.filter(user => {
        return user.name.toLowerCase().includes(value.toLocaleLowerCase())
    })

    return (
        <div className={s.userList}>
            <AddUser addUser={addUser} updateUsersList={updateUsersList}/>
            <Searchbar users={filtered} setValue={setValue}/>
            <div className={s.list}>
                {filtered.reverse().map(user =>
                    <Cadrs user={user}/>
                )}
            </div>
            
        </div>
    )
}

export default UserList
