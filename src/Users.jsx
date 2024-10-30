
import { useLoaderData } from "react-router-dom";
import User from "./User";
import './users.css'
const Users = () => {
  
    const users = useLoaderData()
    return (
        <div>
            <h2>Users data: {users.length}</h2>
            <p>This is list of users of this website</p>
            <div className="users">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;