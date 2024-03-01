import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Pen.css";

const Pen = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onComponent5ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onInkTextClick = useCallback(() => {
    navigate("/ink");
  }, [navigate]);

  const onRefillsTextClick = useCallback(() => {
    navigate("/refill");
  }, [navigate]);

  const onPenTextClick = useCallback(() => {
    navigate("/pen");
  }, [navigate]);

  const onContactUsText2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="pen1">
      <div className="rectangle7" />
      <div className="rectangle8" />
      <div className="rectangle9" />
      <div className="rectangle10" />
      <div className="rectangle11" />
      <div className="rectangle12" />
      <div className="rectangle13" />
      <div className="ballpoint-pens">Ballpoint Pens</div>
      <div className="rectangle-group">
        <img
          className="frame-child1"
          alt=""
          src="/rectangle-89@2x.png"
          data-scroll-to="rectangleImage"
        />
        <img
          className="frame-child2"
          alt=""
          src="/rectangle-90@2x.png"
          onClick={onRectangleImageClick}
        />
      </div>
      <img
        className="arrow-left-circle-icon"
        alt=""
        src="/arrowleftcircle.svg"
      />
      <div className="reliable-and-smooth">
        Reliable and smooth everyday ballpoints for those who need a pen to
        write every time.
      </div>
      <div className="fountain-pens">Fountain Pens</div>
      <div className="rollerball">Rollerball</div>
      <div className="advanced-needlepoint-technolog">
        Advanced needlepoint technology for smooth and careful line production.
      </div>
      <img className="pen-child" alt="" src="/rectangle-92@2x.png" />
      <img className="pen-item" alt="" src="/rectangle-93@2x.png" />
      <img className="pen-inner" alt="" src="/rectangle-94@2x.png" />
      <img className="pen-child1" alt="" src="/rectangle-95@2x.png" />
      <img className="pen-child2" alt="" src="/rectangle-96@2x.png" />
      <img className="pen-child3" alt="" src="/rectangle-97@2x.png" />
      <div className="they-are-also">
        They are also considered to be a more sustainable option than disposable
        pens, as they can be refilled with ink for many years.
      </div>
      <img className="pen-child4" alt="" src="/rectangle-98@2x.png" />
      <img className="pen-child5" alt="" src="/rectangle-99@2x.png" />
      <img className="pen-child6" alt="" src="/rectangle-100@2x.png" />
      <div className="pen-child7" />
      <div className="you-can-effectively">
        You can effectively use a thermochromic ink pen to create captivating
        color-changing artwork or written messages.Enjoy the fascinating
        interplay of temperature and color!
      </div>
      <div className="about-us2">About us</div>
      <img className="pen-child8" alt="" src="/rectangle-102@2x.png" />
      <img className="pen-child9" alt="" src="/rectangle-103@2x.png" />
      <img className="pen-child10" alt="" src="/rectangle-104@2x.png" />
      <img className="pen-child11" alt="" src="/rectangle-105@2x.png" />
      <div className="pen-child12" />
      <div className="footer-ui1">
        <div className="footer-ui-inner" />
        <div className="about-us3" onClick={onAboutUsTextClick}>
          About us
        </div>
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="disclaimer1">Disclaimer</div>
        <div className="contact-us2" onClick={onContactUsTextClick}>
          Contact us
        </div>
        <div className="help1">Help</div>
        <div className="copyright-20181">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className="information1">
          <div className="social1">
            <img
              className="youtube-color1-icon1"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon1"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon1"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon1"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="social-item" alt="" src="/group-29@2x.png" />
            <div className="twitter-black11">
              <div className="rectangle14" />
              <img className="twitter-icon1" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media1">Social Media</div>
          </div>
          <div className="location1">
            <div className="faulconer-drive1">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon1"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone1">
            <div className="div3">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon1"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax1">
            <div className="div4">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon1"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-child1" />
        <img className="logo-lift-icon1" alt="" src="/logo-lift.svg" />
      </div>
      <div className="component-5" onClick={onComponent5ContainerClick}>
        <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
        <div className="baisiyou-ink1">Baisiyou Ink</div>
        <div className="home2" onClick={onHomeText2Click} style={{ cursor: 'pointer' }}>Home</div>
        <div className="about-us4" onClick={onAboutUsText2Click}>
          About Us
        </div>
        <div className="paste1">Paste</div>
        <div className="ink1" onClick={onInkTextClick}>
          Ink
        </div>
        <div className="refills1" onClick={onRefillsTextClick}>
          Refills
        </div>
        <div className="pen2" onClick={onPenTextClick}>
          Pen
        </div>
        <div className="contact-us3" onClick={onContactUsText2Click}>
          Contact Us
        </div>
        <div className="cart1">Cart</div>
        <div className="en1">En</div>
        <div className="div5">中</div>
        <img className="shopping-cart-icon" alt="" src="/shoppingcart.svg" />
        <div className="product1">Product</div>
        <div className="fr1">Fr</div>
        <div className="comment1">Comment</div>
      </div>
    </div>
  );
};

export default Pen;
