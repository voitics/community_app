import react, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap';
import InputField from "../../components/FormFields/InputField";
import ButtonField from "../../components/FormFields/ButtonField";
import CheckField from "../../components/FormFields/CheckField";
import loginBanner from '../../assets/image/loginImage.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = props => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    termsCondition: false
  });
  const { email, password, termsCondition } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLoginSubmit = (e) => {
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
              <h4>Sign in</h4>
              <span>Stay updated on your professional world</span>
            </div>
            <Row>
              <Col>
                <Form>
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
                  <CheckField
                    type="checkbox"
                    value={termsCondition}
                    label="By Sign in, I agree to Terms & Conditions"
                    name="termsCondition"
                    checked={termsCondition}
                    onChange={handleChange}
                  />
                  <ButtonField variant="primary" type="submit" id="loginBtn" onClick={handleLoginSubmit} className='' text="Sign in" />
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="forgetPassword">
                <NavLink to="/ForgetPassword" >Forget Password?</NavLink> <span>OR Create a </span>
                <NavLink to="/signup" >Free Account</NavLink>
              </Col>
            </Row>
            <Row>
              <Col className="loginOtherOptions">
                <h5>Login with</h5>
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

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Login)
