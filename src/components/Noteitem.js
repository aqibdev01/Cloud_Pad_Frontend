import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alert/alertContext";
import themeContext from "../context/theme/themeContext";

function Noteitem(props) {
  const contextAlert = useContext(alertContext);
  const { showAlert } = contextAlert;
  const contextNotes = useContext(noteContext);
  const { deleteNote } = contextNotes;
  const contextTheme = useContext(themeContext);
  const { theme } = contextTheme;

  const { updateNote, elementNote } = props;

  const handleDelete = () => {
    deleteNote(elementNote._id);
    showAlert("Note Deleted Successfully", "success");
  };

  return (
    <div className="col md-3 my-3" data-bs-theme={theme}>
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
