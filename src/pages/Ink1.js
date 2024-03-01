import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Ink1.css";

const Ink1 = () => {
  const navigate = useNavigate();
  const onInkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRefillsTextClick = useCallback(() => {
    navigate("/refill");
  }, [navigate]);
  const onPasteTextClick = useCallback(() => {
    navigate("/paste");
  }, [navigate]);
  const onPenTextClick = useCallback(() => {
    navigate("/pen");
  }, [navigate]);

  const onContactUsText2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="ink2">
      <div className="ink-child" />
      <div className="the-unique-thermo-sensitive">
        The unique thermo-sensitive ink formula allows you to write, erase, and
        rewrite repeatedly without damaging documents and producing crumbs.
        Write like a pen and erase like a pencil !
      </div>
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <div className="thermosensitive-ink-is-container1">
        <p className="we-also-dont">
          Thermosensitive ink is the most popular and reliable ink that can be
          erased. The ink will react and become transparent at temperatures
          above 140 F (60°C), making your mark look like it has been erased.
          Because of its heat-reacting properties, the ink may reappear when
          temperatures reach below -15°C.  Since this kind of ink is sensitive
          to heat, it is best to keep pens and writing away from excessively hot
          or cold temperatures to prevent unnecessary color changes.
        </p>
        <p className="we-also-dont">
          We also don't recommend writing on the back of page when using these
          pens, because the heat may transfer to the other side, causing
          unwanted erasing.
        </p>
      </div>
      <div className="thermosensitive-ink-is-container2">
        <p className="we-also-dont">
          Thermosensitive ink is the most popular and reliable ink that can be
          erased. The ink will react and become transparent at temperatures
          above 140 F (60°C), making your mark look like it has been erased.
          Because of its heat-reacting properties, the ink may reappear when
          temperatures reach below -15°C.  Since this kind of ink is sensitive
          to heat, it is best to keep pens and writing away from excessively hot
          or cold temperatures to prevent unnecessary color changes.
        </p>
        <p className="we-also-dont">
          We also don't recommend writing on the back of page when using these
          pens, because the heat may transfer to the other side, causing
          unwanted erasing.
        </p>
      </div>
      <div className="thermal-erasable-ink">
        Thermal erasable ink is difficult to obtain pure black, so most black
        inks are dark gray or gray-black. Other colors are also softer than the
        colors in the non-erasable pen.
      </div>
      <div className="optional-ink-colors">Optional Ink Colors</div>
      <img className="rectangle-icon1" alt="" src="/rectangle.svg" />
      <img className="image-5-icon" alt="" src="/image-5@2x.png" />
      <img className="image-6-icon" alt="" src="/image-6@2x.png" />
      <img className="image-7-icon" alt="" src="/image-7@2x.png" />
      <img className="image-8-icon" alt="" src="/image-8@2x.png" />
      <img className="image-9-icon" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      <img className="image-13-icon" alt="" src="/image-13@2x.png" />
      <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      <div className="ink-item" />
      <div className="footer-ui2">
        <div className="footer-ui-child2" />
        <div className="about-us5" onClick={onAboutUsTextClick}>
          About us
        </div>
        <div className="privacy-policy2">Privacy Policy</div>
        <div className="disclaimer2">Disclaimer</div>
        <div className="contact-us4" onClick={onContactUsTextClick}>
          Contact us
        </div>
        <div className="help2">Help</div>
        <div className="copyright-20182">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className="information2">
          <div className="social2">
            <img
              className="youtube-color1-icon2"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon2"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon2"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon2"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="social-inner" alt="" src="/group-29@2x.png" />
            <div className="twitter-black12">
              <div className="rectangle15" />
              <img className="twitter-icon2" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media2">Social Media</div>
          </div>
          <div className="location2">
            <div className="faulconer-drive2">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon2"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone2">
            <div className="div6">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon2"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax2">
            <div className="div7">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon2"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-child3" />
        <img className="logo-lift-icon2" alt="" src="/logo-lift.svg" />
      </div>
      <div className="professional-services">Professional Services</div>
      <div className="image" />
      <div className="image" />
      <div className="image" />
      <div className="rectangle18" />
      <div className="rectangle19" />
      <div className="rectangle20" />
      <div className="rectangle21" />
      <div className="rectangle22" />
      <div className="rectangle23" />
      <div className="rectangle24" />
      <div className="rectangle25" />
      <div className="rectangle26" />
      <div className="rectangle27" />
      <div className="rectangle28" />
      <div className="rectangle29" />
      <div className="rectangle30" />
      <div className="rectangle31" />
      <div className="rectangle32" />
      <div className="rectangle33" />
      <div className="rectangle34" />
      <div className="rectangle35" />
      <div className="rectangle36" />
      <div className="rectangle37" />
      <div className="rectangle38" />
      <div className="rectangle39" />
      <div className="rectangle40" />
      <div className="rectangle41" />
      <div className="ink-kitchen-development">Ink Kitchen Development</div>
      <div className="inkfluid-optimization">Ink/Fluid Optimization</div>
      <div className="inkfluid-development">Ink/Fluid Development</div>
      <div className="inkfluid-characterization">
        Ink/Fluid Characterization
      </div>
      <div className="inkfluid-stabilization">Ink/Fluid Stabilization</div>
      <div className="component-suitability-testing">
        Component Suitability Testing
      </div>
      <div className="component-51">
        <div className="rectangle15">
          <img className="image-1-icon2" alt="" src="/image-1@2x.png" />
          <div className="baisiyou-ink2">Baisiyou Ink</div>
          <div className="home3" onClick={onInkTextClick} style={{ cursor: 'pointer' }}>Home</div>
          <div className="about-us6" onClick={onAboutUsText2Click}>
            About Us
          </div>
          <div className="paste2" onClick={onPasteTextClick} style={{ cursor: 'pointer' }}>Paste</div>
          <div className="ink3">Ink</div>
          <div className="refills2" onClick={onRefillsTextClick}>
            Refills
          </div>
          <div className="pen3" onClick={onPenTextClick}>
            Pen
          </div>
          <div className="contact-us5" onClick={onContactUsText2Click}>
            Contact Us
          </div>
          <div className="cart2">Cart</div>
          <div className="en2">En</div>
          <div className="div8">中</div>
          <img className="shopping-cart-icon1" alt="" src="/shoppingcart.svg" />
          <div className="product2">Product</div>
          <div className="fr2">Fr</div>
          <div className="comment2">Comment</div>
        </div>
      </div>
      <div className="rectangle-container">
        <img
          className="frame-child3"
          alt=""
          src="/rectangle-117@2x.png"
          data-scroll-to="rectangleImage1"
        />
        <img
          className="frame-child4"
          alt=""
          src="/rectangle-118@2x.png"
          data-scroll-to="rectangleImage"
          onClick={onRectangleImageClick}
        />
        <img
          className="frame-child4"
          alt=""
          src="/rectangle-119@2x.png"
          onClick={onRectangleImage2Click}
        />
      </div>
    </div>
  );
};

export default Ink1;
