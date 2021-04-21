import react, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import InputField from "../../components/FormFields/InputField";
import ButtonField from "../../components/FormFields/ButtonField";
import CheckField from "../../components/FormFields/CheckField";
import loginBanner from '../../assets/image/loginImage.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    termsCondition: false,
    mobileNo: ''
  });
  const { name, email, password, termsCondition, mobileNo } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Data Saved Successfully" + "  email: " + email + " password " + password);

  }
  return (
    <div className="community_loginPage">
      <Row>
        <Col sm="7" className="community_loginImage">
          <img src={loginBanner} alt="login_banner" />
        </Col>
        <Col sm={5} >
          <div className="community_loginSignupForm">
            <div className="community_loginSignupHeader">
              <h4>Join Now</h4>
              <span>Stay updated on your professional world</span>
            </div>
            <Row>
              <Col>
                <Form>
                  <InputField
                    type="text"
                    value={name}
                    placeholder="Name"
                    label={null}
                    name="name"
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    value={email}
                    placeholder="Email or Username"
                    label={null}
                    name="email"
                    onChange={handleChange}
                  />
                  <InputField
                    type="password"
                    value={password}
                    placeholder="Password"
                    label={null}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    value={mobileNo}
                    placeholder="Mobile No"
                    label={null}
                    name="mobileNo"
                    onChange={handleChange}
                  />
                  <CheckField
                    type="checkbox"
                    value={termsCondition}
                    label="By Sign in, I agree to Terms & Conditions"
                    name="termsCondition"
                    checked={termsCondition}
                    onChange={handleChange}
                  />
                  <ButtonField variant="primary" type="submit" id="signupBtn" onClick={handleSignupSubmit} className='' text="Join Now" />
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="forgetPassword">
                <span>Already Joined ? </span>
                <NavLink to="/signin" >Sign in</NavLink>
              </Col>
            </Row>
            <Row>
              <Col className="loginOtherOptions">
                <h5>Join Us with</h5>
                <div className="login-icons">
                  <a href="#" className="fb-icon"><FaFacebook /></a>
                  <a href="#" className="google-icon"><AiFillGoogleCircle /></a>
                </div>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default Login;
