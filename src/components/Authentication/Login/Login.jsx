import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { Input, Button, AuthCard } from '../../../generics/Generics';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { loginValidator, usersList } from '../../../constants/Contants';
import { signIn } from '../../../actions';

const initialValues = {
  email: '',
  password: '',
  selectuser: '',
};

const Login = () => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const loginState = useSelector(state => state.authentication);
  console.log(loginState, 'LoginState');

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const loginInAction = () => setErrors(loginValidator(values));

  useEffect(() => {
    const errorArray = Object.keys(errors);
    if (errorArray.length === 1 && errorArray.includes('state')) {
      dispatch(signIn(values));
    }
  }, [errors]);

  return (
    <div className="main-login-section">
      <div className="form-container-section">
        <AuthCard>
          <div className="main-login-header">
            <span>Online School Management</span>
          </div>
          <div className="login-information-section py-3">
            <span>Login with your accurate information to access your account</span>
          </div>
          <form className="login-form-section">
            <div className="login-email-section">
              <span> Email Address</span>
              <Input
                inputSize="large"
                inputName="email"
                inputType="text"
                changeValue={handleChange}
              />
            </div>
            <div className="login-passord-section">
              <span>Password</span>
              <Input
                inputSize="large"
                inputName="password"
                inputType="password"
                changeValue={handleChange}
              />
            </div>
            <div className="login-passord-section">
              <span>Sign In As</span>
              <select
                className="login-select-section"
                name="selectuser"
                onChange={handleChange}
                value={values.selectuser}
              >
                <option value="" disabled selected hidden>Select </option>
                {
                  usersList.map(user => (
                    <option key={user.id} value={user.value}>{user.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="login-forgot-password-section">
              <span style={{ color: '#2A57D3', cursor: 'pointer' }}>Forgotten your password?</span>
            </div>
            <div className="login-login-button-section">
              <Button buttonName="Login" buttonSize="large" clickButton={loginInAction} />
            </div>
          </form>
        </AuthCard>
      </div>
      <div className="school-logo-page">
        <AuthCard>
          <div className="manage-remotely-header"> Manage remotely</div>
          <div className="third-party-remotely-header">
            Your third party application that helps you manage your
            school including students, teachers, classes among others.
          </div>
          <Logo style={{ width: '100%', height: '70%', background: '#fff' }} />
        </AuthCard>
      </div>
    </div>
  );
};

export default Login;
