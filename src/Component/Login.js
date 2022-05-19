import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./firebaseInit";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/todo-app";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="login">
      <div>
        <button onClick={() => signInWithGoogle()} className="btn-grad">
          Sign With google
        </button>
        <p className="mt-2 text-danger">{error && error.message}</p>
      </div>
    </div>
  );
};

export default Login;
