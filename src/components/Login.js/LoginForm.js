import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    let data = {
      user: {
        email: email,
        password: password
      }
    }
    axios.post("users/sign_in", data, config)
      .then(res => setLoggedInUser(res.headers.authorization))
      .catch(error => console.log(error))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Log in" />
      </form>
    </>

  )
}