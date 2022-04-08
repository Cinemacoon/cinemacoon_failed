// src/App/index.js file

import React, {useState} from "react"
import { withAlert } from "react-alert";
import validateSignUp from "./check";

const Signuping = ({ alert }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // handles the submit event once the user clicks on the button
    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validateSignUp(username, email, password, alert || " ");

        if (validate) {
            alert.success("You've signed up successfully. Proceed to login");
        }
    };

return (
    <section>
        <div>
            <form onSubmit={handleSubmit}>
               <div>
                <p>Username</p>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
               </div> 
               <div>
                <p>Email Address</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="youremail@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div>
                <p>Enter Password</p>
                  <input
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <div>
                <button>Sign up</button>
                </div>
            </form>
        </div>
    </section>
  );
};

export default withAlert()(Signuping);