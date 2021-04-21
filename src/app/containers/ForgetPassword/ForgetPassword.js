import react, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap';
import InputField from "../../components/FormFields/InputField";
import ButtonField from "../../components/FormFields/ButtonField";
import loginBanner from '../../assets/image/loginImage.png';


const ForgetPassword = props => {
  const [email, setInputValue] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
    console.log("Link Send Successfully" + "  email: " + email);

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
              <h4>Forgot your Password'</h4>
              <span>Please enter the email address you'd like your password reset information sent to </span>
            </div>
            <Row className="mt-3">
              <Col>
                <Form>
                  <InputField
                    type="text"
                    value={email}
                    placeholder="Enter your Email"
                    label={null}
                    name="email"
                    onChange={handleChange}
                  />
                  <ButtonField variant="primary" type="submit" id="loginBtn" onClick={handleForgetPassword} className='' text="Request Reset Link" />
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="forgetPassword">
                Click here
                <NavLink to="/signin" > SingIn</NavLink>
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
)(ForgetPassword)
