import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Refill.css";

const Refill = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

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

  const onBaisiyouInkTextClick = useCallback(() => {
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
    <div className="refill">
      <div className="refill-child" />
      <div className="refill-item" />
      <img className="refill-inner" alt="" src="/rectangle-137@2x.png" />
      <div className="value-for-money">
        Value for money and an easy way to reuse and reduce our waste footprint!
      </div>
      <div className="browse-by-category">Browse by Category</div>
      <img className="image-icon" alt="" src="/image@2x.png" />
      <img className="image-icon1" alt="" src="/image@2x.png" />
      <img className="image-icon2" alt="" src="/image@2x.png" />
      <img className="image-icon3" alt="" src="/image@2x.png" />
      <img className="image-icon4" alt="" src="/image@2x.png" />
      <img className="refill-child1" alt="" src="/rectangle-140@2x.png" />
      <img className="refill-child2" alt="" src="/rectangle-141@2x.png" />
      <img className="refill-child3" alt="" src="/rectangle-142@2x.png" />
      <div className="ballpoint-refill">Ballpoint Refill</div>
      <img className="refill-child4" alt="" src="/rectangle-143@2x.png" />
      <div className="gel-refill">Gel Refill</div>
      <div className="ink-refill">Ink Refill</div>
      <div className="erasable-refills">Erasable Refills</div>
      <img className="refill-child5" alt="" src="/rectangle-144@2x.png" />
      <div className="retractable-ballpoint-refill">
        Retractable Ballpoint Refill
      </div>
      <img className="refill-child6" alt="" src="/rectangle-145@2x.png" />
      <div className="ballpoint-stick-refill">Ballpoint Stick Refill</div>
      <img className="refill-child7" alt="" src="/rectangle-146@2x.png" />
      <div className="refill-child8" />
      <div className="the-particle-size1">
        The particle size of thermosensitive microcapsules is on the nanometer
        scale, which grants them excellent stability. They can maintain
        considerable stability even under thermal baking conditions.
      </div>
      <div className="refill-child9" />
      <img className="refill-child10" alt="" src="/rectangle-149@2x.png" />
      <div className="the-erasure-is">
        The erasure is exceptionally thorough, leaving no traces behind. The
        only occurrence of discoloration happens within the range of minus 15 to
        minus 20 degrees Celsius.
      </div>
      <div className="refill-child11" />
      <div className="this-provides-an-container">
        <span>This provides an exceptional writing experience</span>
        <span className="span1">.</span>
      </div>
      <img className="refill-child12" alt="" src="/rectangle-151@2x.png" />
      <div className="refill-child13" />
      <div className="especially-suitable-for">
        Especially suitable for children to revise repeatedly without the need
        for correction fluid. Parents also need not worry about staining
        clothes.
      </div>
      <div className="refill-child14" />
      <div className="footer-ui5">
        <div className="footer-ui-child8" />
        <div className="about-us11" onClick={onAboutUsTextClick}>
          About us
        </div>
        <div className="privacy-policy5">Privacy Policy</div>
        <div className="disclaimer5">Disclaimer</div>
        <div className="contact-us10" onClick={onContactUsTextClick}>
          Contact us
        </div>
        <div className="help5">Help</div>
        <div className="copyright-20185">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className="information5">
          <div className="social5">
            <img
              className="youtube-color1-icon5"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon5"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon5"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon5"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="social-child2" alt="" src="/group-29@2x.png" />
            <div className="twitter-black15">
              <div className="rectangle59" />
              <img className="twitter-icon5" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media5">Social Media</div>
          </div>
          <div className="location5">
            <div className="faulconer-drive5">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon5"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone5">
            <div className="div15">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon5"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax5">
            <div className="div16">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon5"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-child9" />
        <img className="logo-lift-icon5" alt="" src="/logo-lift.svg" />
      </div>
      <div className="rectangle-parent3">
        <img
          className="frame-child11"
          alt=""
          src="/rectangle-138@2x.png"
          data-scroll-to="rectangleImage"
          onClick={onRectangleImageClick}
        />
        <img
          className="frame-child12"
          alt=""
          src="/rectangle-139@2x.png"
          data-scroll-to="rectangleImage1"
          onClick={onRectangleImage1Click}
        />
        <div className="frame-child13" />
      </div>
      <div className="component-55">
        <div className="rectangle59">
          <img className="image-1-icon6" alt="" src="/image-1@2x.png" />
          <div className="baisiyou-ink5" onClick={onBaisiyouInkTextClick}>
            Baisiyou Ink
          </div>
          <div className="home6">Home</div>
          <div className="about-us12" onClick={onAboutUsText2Click}>
            About Us
          </div>
          <div className="paste6">Paste</div>
          <div className="ink6" onClick={onInkTextClick}>
            Ink
          </div>
          <div className="refills5" onClick={onRefillsTextClick}>
            Refills
          </div>
          <div className="pen6" onClick={onPenTextClick}>
            Pen
          </div>
          <div className="contact-us11" onClick={onContactUsText2Click}>
            Contact Us
          </div>
          <div className="cart5">Cart</div>
          <div className="en5">En</div>
          <div className="div17">中</div>
          <img className="shopping-cart-icon4" alt="" src="/shoppingcart.svg" />
          <div className="product5">Product</div>
          <div className="fr5">Fr</div>
          <div className="comment5">Comment</div>
        </div>
      </div>
    </div>
  );
};

export default Refill;
