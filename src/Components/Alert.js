import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    let lower = word.toLowerCase();
    let l = lower.charAt(0);
    return l.toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "70px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          {props.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
