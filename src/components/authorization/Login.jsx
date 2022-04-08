import React, { useState } from "react";
import Input from "./Input";

function Login() {
  
const [user, setUser] = useState({
  usName: "",
  usPass: ""
});


function handleChange(event) {
  const { value, name } = event.target;

  setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
  }
  );
}


  return (
    <form className="form">
      {/* <h1>{user.usName} {user.usPass}</h1> */}
      <Input name="usName" onChange={handleChange} type="text" placeholder="Username" value={user.usName}/>
      <Input name="usPass" onChange={handleChange} type="password" placeholder="Password" value={user.usPass}/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;