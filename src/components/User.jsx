import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let username = "tickle122";
  useEffect(() => {
    getUsers(username).then((userData) => {
      setUser(userData);
      setIsLoading(false);
    });
  }, [username]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      <li>
        <h2>Welcome to your profile page!</h2>
      </li>
      <li>Username: {user.username}</li>
      <li>Name: {user.name}</li>
      <li>
        <img src={user.avatar_url} alt={`Picture of ${user.name}`}></img>
      </li>
    </ul>
  );
};

export default User;
