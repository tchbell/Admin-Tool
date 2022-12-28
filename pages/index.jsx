import styles from '../styles/Admin.module.scss';
import TableRow from '../components/TableRow.js';
import { db } from '../firebaseConfig';
import { addDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const dbInstance = collection(db, 'users');

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    dateCreated: {},
  });
  const [isEdit, setIsEdit] = useState(false);

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  const setFirst = (user) => {
    setUserFirstName(user.firstName);
  };

  const setLast = (user) => {
    setUserLastName(user.lastName);
  };
  const getEditData = (user) => {
    setIsEdit(true);
    setFirst(user);
    setLast(user);
  };

  const updateFirst = (event) => {
    setUserFirstName(event.target.value);
  };

  const updateLast = (event) => {
    setUserLastName(event.target.value);
  };

  const editUser = () => {
    const collectionById = doc(db, 'users');

    updateDoc(collectionByid, {
      userFirstName: userFirstName,
      userLastName: userLastName,
    }).then(() => {
      window.location.reload();
    });
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

  useEffect(() => {
    getDocs(dbInstance).then((data) => {
      setUsers(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            {' '}
            <tr>
              <th>LastName</th>
              <th>FirstName</th>
              <th>EnrollmentDate</th>
            </tr>
            {users.map((user) => {
              return (
                <TableRow key={user.id} getEditData={getEditData} user={user} />
              );
            })}
          </tbody>
        </table>
        <form action="" onSubmit={addUser}>
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="lastName" placeholder="Last name" />
          <button type="submit">Add User</button>
        </form>
        {isEdit ? (
          <form action="">
            <input
              type="text"
              name="firstName"
              value={userFirstName}
              onChange={updateFirst}
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              onChange={typeLast}
              value={updateLast}
              placeholder="Last name"
            />
            <button type="submit">Update User</button>
          </form>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
