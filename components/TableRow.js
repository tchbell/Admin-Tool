import { useState } from 'react';
export default function TaleRow(props) {
  const [isEdit, setIsEdit] = useState(false);
  const editTrue = () => {
    setIsEdit(!isEdit);
  };

  const editUser = () => {
    props.getEditData(props.user);
  };

  const deleteUser = () => {
    props.deleteUser(props.user);
  };
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return (
    <>
      {' '}
      <tr>
        <td>{props.user.lastName}</td>
        <td>{props.user.firstName}</td>
        <td>
          {props.user.dateCreated.toDate().toLocaleDateString('en-us', options)}
        </td>
        <td>
          {isEdit ? (
            <div>
              <button>Save</button> | <button>Cancel </button>
            </div>
          ) : (
            <button onClick={editUser}>Edit</button>
          )}
          |<button>Details</button> |
          <button onClick={deleteUser}>Delete</button>
        </td>
      </tr>
    </>
  );
}
