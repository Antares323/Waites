import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserList from "./components/UserList/UserList";
import Pagination from "./components/Pagination/Pagination";

const App = (props) => {
  const [users, setUsers] = useState(props.state.users)
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage] = useState(25)

  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = users.slice(firstUserIndex, lastUserIndex)
  console.log(currentUser)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="app-wrapper">
      <Header/>
      <div className="app-wrapper-content">
        <UserList users={currentUser} addUser={props.addUser} updateUsersList={props.updateUsersList}/>
      </div>
      <Pagination 
        userPerPage={userPerPage} 
        totalUsers={users.length}
        paginate={paginate}
      />
      <Footer/>
    </div>
  );
}

export default App;
