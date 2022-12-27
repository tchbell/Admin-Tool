// import { format } from 'date-fns';
export default function TaleRow(props) {
  console.log(props);
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
          <button>Edit</button> |<button>Details</button> |
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}
