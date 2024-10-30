import { useLoaderData } from "react-router-dom";


const UserDetail = () => {
    const user=useLoaderData()
    const {name,website,username}=user;
    return (
        <div>
            <h1>Details about user</h1>
            <p>{name}</p>
            <p>{website}</p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetail;