import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center mt-20">
      <h2>Opps!!! No route found</h2>
      <Link to="/">
        <button className="btn btn-warning mt-5">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
