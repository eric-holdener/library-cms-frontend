import axios from "axios";
import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    axios.post("api/users/login", {
      user: {
        email: email,
        password: password
      }
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  function logger() {
    console.log(email);
    console.log(password);
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
      <button onClick={logger}>Console.log</button>
    </>

  )
}