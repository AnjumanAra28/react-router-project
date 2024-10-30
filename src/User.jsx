
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

const User = ({user}) => {
    
    const userStyle ={
        border:'2px solid blue',
        padding:'10px',
        borderRadius:'15px',
        marginBottom:'15px'
    }
    const {id,name,email,phone}=user; 
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            
        </div>
    );
};

User.propTypes={
    user:PropTypes.object
}
export default User;