import { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(noteContext);
  const { editNote, deleteNote } = context;
  const { note } = props;
  const handleDelete = () => {
    deleteNote(note._id)
  };
  const handleEdit = () => {
    editNote(note._id)
  };
  return (
    <div className="col md-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <Link to="/" className="btn btn-primary mx-2" onClick={handleEdit}>
            <i className="fa-solid fa-file-pen"></i>
            Edit
          </Link>
          <Link to="/" className="btn btn-primary mx-2" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
