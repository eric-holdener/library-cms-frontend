import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)

  function signOut() {
    setLoggedInUser(null);
  }

  return (
    <div>
      <Link to="/">Home</Link>
      { loggedInUser ? (
        <>
          <Link to="user/profile">Profile</Link>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <Link to="login">Login</Link>
      )}
    </div>
  )
}