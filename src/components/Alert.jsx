import React, { useEffect } from "react";

function Alert({ PopUp, setPopUp }) {
  useEffect(() => {
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  }, [setPopUp, PopUp]);

  return (
    PopUp && (
      <div
        style={{
          position: "absolute",
          top: "80px",
          width: "84%",
        }}
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        ! Title or Description is Blank
      </div>
    )
  );
}

export default Alert;
