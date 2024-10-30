import { useLoaderData, useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const PostDetails = () => {
    const params = useParams();
    console.log(params.postId);
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }
    const post = useLoaderData();
    const {id,title,body}=post;
    return (
        <div>
            <h2>post detail:{id}</h2>
            <h3>Title:{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>GO BACK</button>
        </div>
    );
};

export default PostDetails;