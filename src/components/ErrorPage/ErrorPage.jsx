import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text bg-red-700 font-bold">Oops!!!</h2>
            <Link to='/'>GO HOME</Link>
        </div>
    );
};

export default ErrorPage;