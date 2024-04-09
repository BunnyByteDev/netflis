import { LOGIN_BACKGROUND } from "../../utils/constants";
import HeaderLogin from "../login/HeaderLogin";
import { useRef, useState, useEffect } from "react";
import { checkValidData } from "../../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
      }
    });
  }, []);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data:
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; //if there's a message, return the message and not go ahead

    //Sign in/Sign up logic when there's not a message:
    if (!isSignInForm) {
      //signn up logic:
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <HeaderLogin />
      <div className="absolute">
        <img
          src={LOGIN_BACKGROUND}
          alt="background"
          className="bg-cover min-h-screen min-w-fit"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black
        bg-opacity-80
      absolute
      w-3/12
      min-w-[28rem] 
      p-12
      my-36
      mx-auto right-0 left-0
      text-white
      "
      >
        <h1 className="text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full
          bg-gray-900
          bg-opacity-70
          rounded-md"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 
        m-2  w-full  bg-gray-900 bg-opacity-70 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full bg-gray-900 bg-opacity-70 rounded-md"
        ></input>
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="submit"
          className="p-2 m-2 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already have Netflix? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
