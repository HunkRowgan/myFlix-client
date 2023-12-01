import React from "react";
import {useState} from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents default behaviour of the form which is to reload whole page
    

    const data = {
        Username: Username,
        Password: Password
    };

    fetch("https://hunkrowganmovieapi.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                onLoggedIn(username);
            } else {
                alert("Login failed");
            }
        });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
           type="text"
           value={Username}
           onChange={(e) => setUsername(e.target.value)}
           />
        </label>
        <label>
          Password:
          <input
           type="Password"
           value={Password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };