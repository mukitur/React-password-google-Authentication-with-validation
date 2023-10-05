import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;
    console.log(name, email, password);

    // Reset error
    setRegisterError('');
    // ccheck password
    if (password.length < 6) {
      setRegisterError('Password must be minimum 6 Character Long');
      return;
    } else if (!/[A-Z][a-z][0-9]/.test(password)) {
      setRegisterError(
        'Your password should one upper case Letter, One Lowercase Letter and a Number'
      );
      return;
    } else if (!termsAccepted) {
      setRegisterError('Please accept Terms & Conditions');
      return;
    }
  };
  return (
    <div>
      <div className="text-center mt-10 mb-5">
        <h2 className="text-3xl font-bold">Create New Account</h2>
      </div>
      <div className="card w-full md:w-3/4 mx-auto max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                required
                className="input input-bordered"
              />
              <span
                className="relative -top-8 -right-52 md:-right-72 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              <div className="flex">
                <input className="mr-2" type="checkbox" name="terms" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Accept Terms & Conditions
                  </a>
                </label>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-sm">
            Already have account? Please
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </p>
          {registerError && <p>{registerError}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
