import { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props)=> {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4500);
  };

  return (
    <alertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </alertContext.Provider>
  );
}

export default AlertState;
