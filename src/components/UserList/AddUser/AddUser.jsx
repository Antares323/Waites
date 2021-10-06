import React, { useState } from 'react'
import s from './AddUser.module.scss'

function AddUser({addUser, updateUsersList}) {
    const [name, setName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')
    const [birthday, setBirthday] = useState('')

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            avatarUrl: avatarUrl,
            phone: phone,
            email: email,
            sex: sex,
            birthday: birthday
        }
        updateUsersList(data)
    }
  

    return (
        <div className={s.adduser} id='form'>
            <form onSubmit={handleSubmit} className={s.form} method="get">
                <label htmlFor="name">Name:
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Type your name ..."
                    />
                </label>

                <label htmlFor="phone">Phone:
                    <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Type your phone ..."
                    />
                </label>
                
                <label htmlFor="email">Email: 
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Type your email ..."
                    />
                </label>
                
                <label id={s.sex} htmlFor="sex">Gender: 
                   <br />
                    Male: <input 
                        className={s.gender}
                        type="radio" 
                        name="sex" 
                        id="sex1" 
                        value="male"
                        onChange={(e) => setSex(e.target.value)}
                    />
                    Female: <input 
                        className={s.gender}
                        type="radio" 
                        name="sex" 
                        id="sex2" 
                        value="female"
                        onChange={(e) => setSex(e.target.value)}
                    />
                    Other: <input 
                        className={s.gender}
                        type="radio" 
                        name="sex" 
                        id="sex3" 
                        value="other"
                        onChange={(e) => setSex(e.target.value)}
                        />
                </label>
                
                <label htmlFor="biryhday">Biryhday:
                    <input 
                        type="date" 
                        name="biryhday" 
                        id="biryhday" 
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="Type your birthday ..."
                    />
                </label>

                <input 
                    type="submit" 
                    value="Add User"
                />
            </form>
            <div className={s.overlay}></div>
        </div>
    )
}

export default AddUser
