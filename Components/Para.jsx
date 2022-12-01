import React from "react";

var username = "Made by Siva Dharshini";
const curryear = new Date();
const year = curryear.getFullYear();

function Para(){
    return(
    <p>
    {" " + username + " "}
    {year + "❤️"}
  </p>
    );
}
export default Para;