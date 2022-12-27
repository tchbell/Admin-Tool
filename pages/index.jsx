import styles from '../styles/Admin.module.scss';
import TableRow from '../components/TableRow.js';
import { db } from '../firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';

export default function Home() {
  const dbInstance = collection(db, 'users');

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    dateCreated: {},
  });
  const getData = () => {
    getDocs(dbInstance).then((data) => {
      setUsers(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
    console.log('users = ', users);
  };

  const addUser = (event) => {
    event.preventDefault();
    setNewUser({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dateCreated: new Date(),
    });
    addDoc(dbInstance, {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dateCreated: new Date(),
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <tr>
            <th>LastName</th>
            <th>FirstName</th>
            <th>EnrollmentDate</th>
          </tr>
          {users.map((user) => {
            return <TableRow user={user} />;
          })}
        </table>
        <button onClick={getData}>Get Data</button>
        <form action="" onSubmit={addUser}>
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="lastName" placeholder="Last name" />
          <button type="submit">Add User</button>
        </form>
      </main>
    </div>
  );
}
