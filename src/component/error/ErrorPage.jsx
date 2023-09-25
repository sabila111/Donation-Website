import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <h2>Oopss!!!</h2> 
           <Link to={'/'}><button>go back</button></Link>
        </div>
    );
};

export default ErrorPage;