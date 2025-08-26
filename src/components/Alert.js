import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";
import themeContext from "../context/theme/themeContext";

function Alert() {
  const contextAlert = useContext(alertContext);
  const { alert } = contextAlert;

  const contextTheme = useContext(themeContext);
  const { theme } = contextTheme;
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
          data-bs-theme={theme}
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
