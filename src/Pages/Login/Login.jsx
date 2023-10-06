import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign In user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess('Logged in Successfully');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center mt-10 mb-5">
        <h2 className="text-3xl font-bold">Login</h2>
      </div>
      <div className="card w-full md:w-3/4 mx-auto max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-sm">
            New to this website? Please
            <Link to="/register">
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
          {loginSuccess && <p>{loginSuccess}</p>}
          {/* <p>
            <button onClick={handleGoogleSignIn} className="btn btm-ghost ">
              Google SignIn
            </button>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
