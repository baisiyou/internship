import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRefillsTextClick = useCallback(() => {
    navigate("/refill");
  }, [navigate]);

  const onPenTextClick = useCallback(() => {
    navigate("/pen");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-child" />
      <div className="form">
        <div className="section-forgot">
          <div className="forgot-password">Forgot password?</div>
          <div className="remember-me">Remember me</div>
          <div className="section-forgot-child" />
        </div>
        <div className="login-btn">
          <div className="rectangle60" />
          <div className="login1">login</div>
        </div>
        <div className="password">
          <div className="rectangle61" />
          <div className="password1">Password</div>
        </div>
        <div className="username">
          <div className="rectangle61" />
          <div className="login2">Login</div>
        </div>
        <div className="sign-in-and">
          Sign in and start managing your candidates!
        </div>
        <div className="sign-in">Sign in</div>
      </div>
      <img className="vectors-icon" alt="" src="/vectors.svg" />
      <img
        className="light-mode-dark-mode"
        alt=""
        src="/light-mode--dark-mode.svg"
      />
      <div className="component-57">
        <div className="component-58">
          <img className="image-1-icon7" alt="" src="/image-1@2x.png" />
          <div className="baisiyou-ink6">Baisiyou Ink</div>
          <div className="home7" onClick={onHomeTextClick} style={{ cursor: 'pointer' }}>Home</div>
          <div className="about-us13" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="paste7">Paste</div>
          <div className="ink7">Ink</div>
          <div className="refills6" onClick={onRefillsTextClick}>
            Refills
          </div>
          <div className="pen7" onClick={onPenTextClick}>
            Pen
          </div>
          <div className="contact-us12" onClick={onContactUsTextClick}>
            Contact Us
          </div>
          <div className="cart6">Cart</div>
          <div className="en6">En</div>
          <div className="div18">中</div>
          <img className="shopping-cart-icon5" alt="" src="/shoppingcart.svg" />
          <div className="product6">Product</div>
          <div className="fr6">Fr</div>
          <div className="comment6">Comment</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
