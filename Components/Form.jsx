import React from "react";

function Form(){
    return(
    <form className="form" action="#">
      <label className="userPass input">User name:</label>
      <input className="input" type="text" />
      <br />
      <label className="userPass input">Password:</label>
      <input className="input" type="text" />
      <br />
      
      <input className="input loginbot" type="submit" value="Log in" />
    </form>
    );
}

export default Form;