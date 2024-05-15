import { useState, useEffect } from "react"; // Add useEffect import
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = ({ onLogin }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for simulating page reload
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/login";
      // Disable the login button to prevent multiple submissions
      e.target.querySelector('button[type="submit"]').disabled = true;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      const userId = res.userId;
      window.location.reload()
      onLogin(res.data); // Call the onLogin function with the token
      // navigate(`/${userId}`); // Redirect to the unique user page
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    } finally {
      // Re-enable the login button after the request finishes
      e.target.querySelector('button[type="submit"]').disabled = false;
    }
  };
  
  

  // Effect to reset state when isLoggedIn changes
  useEffect(() => {
    if (isLoggedIn) {
      setData({ email: "", password: "" }); // Reset form fields
      setError(""); // Clear any error message
      setIsLoggedIn(false); // Reset isLoggedIn state
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
