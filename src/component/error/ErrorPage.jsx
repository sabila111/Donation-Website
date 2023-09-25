import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <h2 className="text-center text-5xl text-orange-500">404 NOT FOUND</h2> 
           <Link to={'/'}><button>go back</button></Link>
        </div>
    );
};

export default ErrorPage;