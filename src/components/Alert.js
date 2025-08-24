import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";

function Alert() {
  const context = useContext(alertContext);
  const { alert } = context;
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "59px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.message}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
