import React from 'react'
import { useParams } from 'react-router-dom';
function Users() {
  const { id } = useParams();
  return (
   <div>
    <h2>Soy el usuario con {id}</h2>
   </div>
  );
 }
/*
class Users extends React.Component {
  
  render() {
    
    return (
      <div>
        <h1>Usuarios</h1>
        <p></p>
      </div>
    )
  }
}
*/
export default Users;
