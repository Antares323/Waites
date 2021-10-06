import {rerenderState} from '../rerender'
let state = {
    users: [
        {id: 1, name: 'Alex', avatarUrl: '', phone: '+380959293843', email: 'samoran232@gmail.com', sex: 'male', birthday: '18-11-1999'},
        {id: 2, name: 'Jane', avatarUrl: '', phone: '+380959486812', email: 'samoran233@gmail.com', sex: 'female', birthday: '08-01-2000'},
        {id: 3, name: 'Lex', avatarUrl: '', phone: '+380956693846', email: 'samoran234@gmail.com', sex: 'male', birthday: '10-10-1998'},
        {id: 4, name: 'Ann', avatarUrl: '', phone: '+380953745846', email: 'samoran235@gmail.com', sex: 'female', birthday: '10-11-1996'},
        {id: 5, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 6, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 7, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 8, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 9, name: 'Mike', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 10, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 11, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 12, name: 'Alex', avatarUrl: '', phone: '+380959293843', email: 'samoran232@gmail.com', sex: 'male', birthday: '18-11-1999'},
        {id: 13, name: 'Jane', avatarUrl: '', phone: '+380959486812', email: 'samoran233@gmail.com', sex: 'female', birthday: '08-01-2000'},
        {id: 14, name: 'Ann', avatarUrl: '', phone: '+380953745846', email: 'samoran235@gmail.com', sex: 'female', birthday: '10-11-1996'},
        {id: 15, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 16, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 17, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 18, name: 'Mike', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 19, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 20, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 21, name: 'Max', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'},
        {id: 22, name: 'Mike', avatarUrl: '', phone: '+38099538846', email: 'samoran236@gmail.com', sex: 'male', birthday: '19-12-1998'}
    ]
}

export let addUser = (userInput) => {
    let newUser = {
        id: state.users.length + 1,
        name: userInput.name,
        avatarUrl: '',
        phone: userInput.phone,
        email: userInput.email,
        sex: userInput.sex,
        birthday: userInput.birthday
    }

    state.users.push(newUser);
}

export let updateUsersList = (data) => {
    state.users.push(data);
    rerenderState(state);
}

export default state;