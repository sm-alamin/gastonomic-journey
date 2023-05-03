import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate();

  // Custom Login
  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace:true})
        })
        .catch(error => {
          setError(error.message);
        })
    
}

//Google Login
const handleGoogleSignIn = () => {

  signInWithPopup(auth, googleProvider)
      .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          setUser(loggedInUser);
          navigate(from, {replace:true})
      })
      .catch(error => {
          console.log(error);
      })
}
//Github login
const handleGithubSignIn = () => {
  signInWithPopup(auth, githubProvider)
  .then( result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
      navigate(from, {replace:true})
  })
  .catch(error => {
      console.log(error)
  })
}
  return (
    <div className="bg-food flex flex-col items-center justify-center min-h-screen pb-10">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <form onSubmit={handleLogin}>
        <p className="text-error">{error}</p>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <FaGoogle />
            <span className="ml-2" onClick={handleGoogleSignIn}>Login with Google</span>
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <FaGithub/>
            <span className="ml-2" onClick={handleGithubSignIn}>Login with Github</span>
          </button>
        </div>
        <p className="mt-8 text-center">
          Need an account?{" "}
          <Link className="font-bold text-blue-500 hover:text-blue-800" to='/register'>
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
