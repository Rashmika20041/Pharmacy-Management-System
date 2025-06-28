import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { GiMedicines } from "react-icons/gi";

const RegisterForm = () => {
  return (
    <div className='register-wrapper'>
      <form action="">
        <GiMedicines className='register-top-icon' />
        <h2>Create An Account</h2>

        <div className="register-input-box">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Age" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Address" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Mobile Number" required />
        </div>
        <div className="register-input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="register-input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <button type='submit'>Register</button>

        <div className="register-register-link">
            <p>
                Already have an account?  <Link to="/login">Sign In.</Link>
            </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
