import React from 'react'
import s from './Cards.module.scss'

const sex = (sex) => {
    if (sex.avatarUrl == '') {
        if (sex.sex == 'female') {
            return <img src='./img/Cards/female.png' alt="avatar" /> 
        } else {
            return <img src='./img/Cards/male.png' alt="avatar" />
        }
    } else {
        return <img src={sex.avatarUrl} alt="avatar" />
    }
}
    
function Cards(props) {
    return (
        <div>
            <div className={s.card}>
                <ul className={s.dataUser}>
                    <li className={s.avatar}>{sex(props.user)}</li>
                    <li className={s.name}>{props.user.name}</li>
                    <li className={s.phone}><img src='./img/Cards/phone.png' alt="phone" />{props.user.phone}</li>
                    <li className={s.email}><img src='./img/Cards/email.png' alt="email" />{props.user.email}</li>
                    <li className={s.sex}><img src='./img/Cards/sex.png' alt="sex" />{props.user.sex}</li>
                    <li className={s.birthday}><img src='./img/Cards/birthday.png' alt="birthday" />{props.user.birthday}</li>
                </ul>
                <input type="submit" value="Follow" />
            </div>
        </div>
    )
}

export default Cards
