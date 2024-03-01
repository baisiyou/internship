import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Paste.css";

const Paste = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage1Click = useCallback(() => {
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

  return (
    <div className="paste4">
      <div className="paste-child" />
      <div className="rectangle-parent2">
        <img
          className="frame-child9"
          alt=""
          src="/rectangle-125@2x.png"
          data-scroll-to="rectangleImage"
          onClick={onRectangleImageClick}
        />
        <img
          className="frame-child10"
          alt=""
          src="/rectangle-126@2x.png"
          data-scroll-to="rectangleImage1"
          onClick={onRectangleImage1Click}
        />
        <img className="image-1-icon4" alt="" src="/image-1@2x.png" />
      </div>
      <div className="rectangle50" />
      <div className="rectangle51" />
      <div className="rectangle52" />
      <div className="rectangle53" />
      <div className="rectangle54" />
      <div className="rectangle55" />
      <div className="rectangle56" />
      <div className="rectangle57" />
      <div className="category">Category</div>
      <div className="price">Price</div>
      <div className="pigment-type">Pigment Type</div>
      <div className="particle-size">Particle Size</div>
      <div className="health-safety">{`Health & Safety`}</div>
      <img className="paste-item" alt="" src="/rectangle-81@2x.png" />
      <img className="paste-inner" alt="" src="/rectangle-82@2x.png" />
      <img className="paste-child1" alt="" src="/rectangle-83@2x.png" />
      <img className="paste-child2" alt="" src="/rectangle-84@2x.png" />
      <img className="paste-child3" alt="" src="/rectangle-85@2x.png" />
      <img className="paste-child4" alt="" src="/rectangle-86@2x.png" />
      <div className="paste-child5" />
      <div className="the-particle-size">
        The particle size of the thermal-sensitive pigment employed within the
        pen measures less than 0.8 micrometers, underscoring its meticulous
        engineering to achieve optimal performance. This finely calibrated size
        not only ensures precise application but also underscores the pigment's
        remarkable stability, rendering it resistant to fluctuations in
        environmental conditions. Furthermore, its finely tuned composition
        guarantees a clean and flawless writing experience, leaving behind no
        trace of residual coloration, thereby maintaining the integrity of the
        writing surface.
      </div>
      <img className="paste-child6" alt="" src="/rectangle-109@2x.png" />
      <img className="paste-child7" alt="" src="/rectangle-111@2x.png" />
      <img className="paste-child8" alt="" src="/rectangle-112@2x.png" />
      <img className="paste-child9" alt="" src="/rectangle-113@2x.png" />
      <div className="paste-child10" />
      <div className="footer-ui4">
        <div className="footer-ui-child6" />
        <div className="about-us9" onClick={onAboutUsTextClick}>
          About us
        </div>
        <div className="privacy-policy4">Privacy Policy</div>
        <div className="disclaimer4">Disclaimer</div>
        <div className="contact-us8" onClick={onContactUsTextClick}>
          Contact us
        </div>
        <div className="help4">Help</div>
        <div className="copyright-20184">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className="information4">
          <div className="social4">
            <img
              className="youtube-color1-icon4"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon4"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon4"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon4"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="social-child1" alt="" src="/group-29@2x.png" />
            <div className="twitter-black14">
              <div className="rectangle58" />
              <img className="twitter-icon4" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media4">Social Media</div>
          </div>
          <div className="location4">
            <div className="faulconer-drive4">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon4"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone4">
            <div className="div12">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon4"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax4">
            <div className="div13">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon4"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-child7" />
        <img className="logo-lift-icon4" alt="" src="/logo-lift.svg" />
      </div>
      <div className="component-54">
        <img className="image-1-icon5" alt="" src="/image-1@2x.png" />
        <div className="baisiyou-ink4">Baisiyou Ink</div>
        <div className="home5">Home</div>
        <div className="about-us10" onClick={onAboutUsText2Click}>
          About Us
        </div>
        <div className="paste5">Paste</div>
        <div className="ink5" onClick={onInkTextClick}>
          Ink
        </div>
        <div className="refills4" onClick={onRefillsTextClick}>
          Refills
        </div>
        <div className="pen5" onClick={onPenTextClick}>
          Pen
        </div>
        <div className="contact-us9">Contact Us</div>
        <div className="cart4">Cart</div>
        <div className="en4">En</div>
        <div className="div14">中</div>
        <img className="shopping-cart-icon3" alt="" src="/shoppingcart.svg" />
        <div className="product4">Product</div>
        <div className="fr4">Fr</div>
        <div className="comment4">Comment</div>
      </div>
    </div>
  );
};

export default Paste;
