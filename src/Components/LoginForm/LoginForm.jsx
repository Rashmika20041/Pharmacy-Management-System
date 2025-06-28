import './LoginForm.css';
import { Link } from "react-router-dom";
import { FaUser,FaLock } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

const LoginForm = () => {
  return (
    <div className='login-wrapper'>
        <form action="">
            <GiMedicines className='login-top-icon' />
            <p>Welcome back!</p>
            <p className='login-sub-topic'>Sign in to your account to continue.</p>
            <div className="login-input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className="login-input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>

            <button type='submit'>Login</button>

            <div className="login-register-link">
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
