import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onPasteTextClick = useCallback(() => {
    navigate("/paste");
  }, [navigate]);

  const onInkTextClick = useCallback(() => {
    navigate("/ink");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  const onBaisiyouInkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="home">
      <div className="rectangle" />
      <div className="rectangle1" />
      <div className="image" />
      <div className="rectangle2" />
      <div className="image1" />
      <div className="rectangle3" />
      <div className="rectangle4" />
      <div className="rectangle5" />
      <div className="rectangle6" />
      <img className="rectangle-icon" alt="" src="/rectangle.svg" />
      <div className="rectangle7" />
      <div className="rectangle8" />
      <div className="rectangle9" />
      <div className="rectangle10" />
      <div className="rectangle11" />
      <div className="rectangle12" />
      <div className="rectangle13" />
      <div className="rectangle14" />
      <div className="rectangle15" />
      <div className="rectangle16" />
      <div className="rectangle17" />
      <div className="rectangle18" />
      <div className="skip-to-content">Skip to content</div>
      <div className="thermochromic-microcapsule-ink">
        Thermochromic Microcapsule INK
      </div>
      <div className="available-temperatures-container">
        <span>
          <span>Available Temperatures</span>
          <span className="span">{` : `}</span>
        </span>
        <span className="c">~60°C</span>
      </div>
      <div className="cautions-we-advise">
        Cautions: We advise against writing on the reverse side of the page when
        using these pens, as heat transfer may occur, leading to unintended
        erasure.
      </div>
      <div className="product-features">Product Features</div>
      <div className="erasable-properties">Erasable Properties</div>
      <div className="thermosensitive-ink-is">
        Thermosensitive ink is highly sought after due to its ability to be
        easily erased.
      </div>
      <div className="temperature-reactivity">Temperature Reactivity</div>
      <div className="this-ink-undergoes">
        This ink undergoes a significant change, becoming transparent, when
        exposed to temperatures exceeding 140°F (60°C), effectively making
        markings appear erased.
      </div>
      <div className="temperature-sensitivity">Temperature Sensitivity</div>
      <div className="given-its-sensitivity">
        Given its sensitivity to temperature, it's advisable to store pens and
        avoid writing in environments with extreme heat or cold to prevent
        unintended color changes.
      </div>
      <div className="product-inquiries">Product inquiries</div>
      <img className="home-child" alt="" src="/rectangle-6@2x.png" />
      <img className="home-item" alt="" src="/rectangle-7@2x.png" />
      <img className="home-inner" alt="" src="/rectangle-13@2x.png" />
      <img className="home-child1" alt="" src="/rectangle-41@2x.png" />
      <img className="home-child2" alt="" src="/rectangle-44@2x.png" />
      <div className="the-reversible-thermochromic">
        The reversible thermochromic composition comprises a solubilizing blend
        of an electron-donating organic compound (A), an electron-accepting
        compound (B), and a reaction medium (C), facilitating reversible
        electron exchange among them at a defined temperature range. At
        temperatures exceeding 60°C, the ink fades, while color develops as
        temperatures drop below -15°C. Rubbing the ink with a firm eraser
        generates heat through friction, causing the temperature-sensitive
        compound to diminish, effectively making the ink vanish!
      </div>
      <b className="gel-pen">Gel Pen</b>
      <b className="marker-pen">Marker Pen</b>
      <b className="fountain-pen">Fountain Pen</b>
      <b className="rollerball-pen">Rollerball Pen</b>
      <div className="magic-erasable-ink">Magic Erasable Ink</div>
      <div className="frame-div" />
      <i className="our-micro-encapsulated-thermos">
        Our micro-encapsulated thermosensitive ink is formulated with a
        polyurethane coating and does not contain formaldehyde. It exhibits a
        color-changing temperature range of -15 to 60°C. When the temperature
        exceeds 60°C, the ink vanishes, allowing for effortless erasure through
        simple frictional heating, such as rubbing. The erased areas can be
        rewritten over and erased repeatedly as needed. However, due to its
        temperature-reactive nature, the ink may reappear when temperatures drop
        below -15°C. To prevent unintentional disappearance, it is advisable to
        avoid leaving the ink in hot environments or subjecting it to vigorous
        friction. Additionally, we advise against writing on the reverse side of
        the page, as heat may transfer, leading to inadvertent erasure.
      </i>
      <div className="attractive-erasable-pen">Attractive Erasable Pen</div>
      <div className="image2" />
      <div className="insilico">Insilico</div>
      <div className="contact-us">Contact Us</div>
      <div className="location">Location</div>
      <div className="thermosensitive-ink-is-the-mos-wrapper">
        <div className="thermosensitive-ink-is-container">
          <p className="thermosensitive-ink-is1">
            Thermosensitive ink is the most popular and reliable ink that can be
            erased. The ink will react and become transparent at temperatures
            above 140 F (60°C), making your mark look like it has been erased.
            Because of its heat-reacting properties, the ink may reappear when
            temperatures reach below -15°C.  Since this kind of ink is sensitive
            to heat, it is best to keep pens and writing away from excessively
            hot or cold temperatures to prevent unnecessary color changes.
          </p>
        </div>
      </div>
      <img className="home-child3" alt="" src="/rectangle-71@2x.png" />
      <img className="home-child4" alt="" src="/rectangle-72@2x.png" />
      <img className="home-child5" alt="" src="/rectangle-73@2x.png" />
      <img className="home-child6" alt="" src="/rectangle-74@2x.png" />
      <img className="home-child7" alt="" src="/rectangle-75@2x.png" />
      <img className="home-child8" alt="" src="/rectangle-37@2x.png" />
      <div className="rectangle-div" />
      <div className="about-us">About us</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="contact-us1">Contact us</div>
      <div className="help">Help</div>
      <div className="copyright-2018">Copyright © 2024 • Baisiyou Ink Inc.</div>
      <img
        className="youtube-color1-icon"
        alt=""
        src="/youtube-color1@2x.png"
      />
      <img
        className="linkedin-black1-icon"
        alt=""
        src="/linkedin-black1@2x.png"
      />
      <div className="facebook-black1">
        <div className="rectangle19" />
        <img className="facebook-icon" alt="" src="/facebook.svg" />
      </div>
      <div className="twitter-black1">
        <div className="rectangle19" />
        <img className="twitter-icon" alt="" src="/twitter.svg" />
      </div>
      <div className="social-media">Social Media</div>
      <div className="faulconer-drive">
        345 Faulconer Drive, Suite 4 • Charlottesville, Canada, 12345
      </div>
      <img
        className="round-place-24px-icon"
        alt=""
        src="/roundplace24px@2x.png"
      />
      <div className="phone">
        <div className="div">(123) 456-7890</div>
        <img
          className="round-phone-24px-icon"
          alt=""
          src="/roundphone24px.svg"
        />
      </div>
      <img
        className="round-local-printshop-24px-icon"
        alt=""
        src="/roundlocalprintshop24px@2x.png"
      />
      <div className="home-child9" />
      <div className="thermosensitive-micro-encapsul">
        Thermosensitive Micro-Encapsulated Ink
      </div>
      <div className="rectangle21" />
      <div className="component-3">
        <div className="rectangle22" />
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="component-3-child" />
        <div className="about-us1">About us</div>
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="contact-us2">Contact us</div>
        <div className="help1">Help</div>
        <div className="copyright-20181">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <img
          className="youtube-color1-icon1"
          alt=""
          src="/youtube-color1@2x.png"
        />
        <img
          className="linkedin-black1-icon1"
          alt=""
          src="/linkedin-black1@2x.png"
        />
        <div className="facebook-black11">
          <div className="rectangle19" />
          <img className="facebook-icon" alt="" src="/facebook.svg" />
        </div>
        <div className="twitter-black11">
          <div className="rectangle19" />
          <img className="twitter-icon" alt="" src="/twitter.svg" />
        </div>
        <div className="social-media1">Social Media</div>
        <div className="faulconer-drive1">
          345 Faulconer Drive, Suite 4 • Charlottesville, Canada, 12345
        </div>
        <img
          className="round-place-24px-icon1"
          alt=""
          src="/roundplace24px@2x.png"
        />
        <div className="phone1">
          <div className="div">(123) 456-7890</div>
          <img
            className="round-phone-24px-icon"
            alt=""
            src="/roundphone24px.svg"
          />
        </div>
        <img
          className="round-local-printshop-24px-icon1"
          alt=""
          src="/roundlocalprintshop24px@2x.png"
        />
        <div className="component-3-item" />
        <img className="logo-lift-icon" alt="" src="/logo-lift.svg" />
      </div>
      <img className="home-child10" alt="" src="/rectangle-88.svg" />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="home1">Home</div>
      <div className="paste" onClick={onPasteTextClick}>
        Paste
      </div>
      <div className="refills">Refills</div>
      <div className="pen">Pen</div>
      <div className="contact">{`Contact  `}</div>
      <div className="cart">Cart</div>
      <img className="shopping-cart-icon" alt="" src="/shoppingcart.svg" />
      <div className="ink" onClick={onInkTextClick}>
        Ink
      </div>
      <div className="rectangle-parent">
        <img
          className="frame-child"
          alt=""
          src="/rectangle-1@2x.png"
          data-scroll-to="rectangleImage2"
        />
        <img
          className="frame-item"
          alt=""
          src="/rectangle-2@2x.png"
          data-scroll-to="rectangleImage1"
          onClick={onRectangleImage1Click}
        />
        <img
          className="frame-inner"
          alt=""
          src="/rectangle-3@2x.png"
          data-scroll-to="rectangleImage"
          onClick={onRectangleImageClick}
        />
        <img
          className="frame-child1"
          alt=""
          src="/rectangle-4@2x.png"
          onClick={onRectangleImage2Click}
        />
      </div>
      <div className="baisiyou-ink" onClick={onBaisiyouInkTextClick}>
        Baisiyou Ink
      </div>
      <div className="about-us2" onClick={onAboutUsText1Click}>
        About Us
      </div>
    </div>
  );
};

export default Home;
