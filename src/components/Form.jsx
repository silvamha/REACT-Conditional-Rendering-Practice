import React from "react";

function Form(props) {
  return (
    <form id="form-el"  className="form">
      <input id="username-el" type="text" placeholder="Username" />
      <input id="password-el" type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input id="confirm-el" type="password" placeholder="Confirm Password" />
      )}

      <button id="btn-el" type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
