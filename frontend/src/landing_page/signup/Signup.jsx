// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/signup",
//         {
//           username,
//           email,
//           password,
//           createdAt: new Date(),
//         }
//       );

//       console.log(response.data);
//       alert("Signup Successful");

//     } catch (error) {
//       console.log(error);
//       alert("Signup Failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Signup</h1>

//       <form onSubmit={handleSignup}>

//         <input
//           type="text"
//           placeholder="Enter Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit">
//           Signup
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 p-5" id="signup_con">
      <h2 className="text-center" id="sign_heading">Signup Account</h2>
      <form onSubmit={handleSubmit} id="sign_form">
        <div>
          <label htmlFor="email" className="sign_label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            className="sign_inp"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="sign_label">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            className="sign_inp"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sign_label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            className="sign_inp"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="sign_btn">Submit</button>
        <span className="sign_span">
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;