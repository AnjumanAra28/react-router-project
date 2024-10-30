import { useRouteError ,Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h4>page not found</h4>
                    <p>GO back to home page</p>
                    <Link to='/'><button>Go back</button></Link>
                </div>  
            }
        </div>
    );
};

export default ErrorPage;