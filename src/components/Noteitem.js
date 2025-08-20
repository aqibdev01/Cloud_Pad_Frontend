import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { updateNote, elementNote } = props;

  const handleDelete = () => {
    deleteNote(elementNote._id);
  };


  return (
    <div className="col md-3 my-3">
      
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{elementNote.title}</h5>
          <p className="card-text">{elementNote.description}</p>
          <button
  className="btn btn-primary mx-2"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  onClick={() => updateNote(elementNote)}
>
  <i className="fa-solid fa-file-pen"></i> Edit
</button>

          <button className="btn btn-primary mx-2" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
