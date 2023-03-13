

import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;






// import React from 'react'

// const UsersList = () => {
//   return (
//     <div>
//       <h1>UsersList</h1>
//       <h1>UsersList</h1>
//       <h1>UsersList</h1>

//     </div>
//   )
// }

// export default UsersList