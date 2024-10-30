import PropTypes from 'prop-types';
import { Link, useNavigate} from 'react-router-dom';


const Post = ({post}) => {
    const {id,title}=post;
    const navigate = useNavigate();
    const handleShowDetail =()=>{
        navigate(`/post/${id}`)
    }
    const postStyle ={
        border:'2px solid blue',
        padding:'10px',
        borderRadius:'15px',
        marginBottom:'15px'
    }
    return (
        <div style={postStyle}>
            <h4>Post Id: {id}</h4>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Show details</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

Post.propTypes={
    post:PropTypes.object
}
export default Post;