import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Paste.css";

const Paste = () => {
  const navigate = useNavigate();

  const onArrowLeftCircleIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBaisiyouInkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="paste1">
      <div className="image19" />
      <div className="image20" />
      <div className="image21" />
      <div className="image22" />
      <div className="image23" />
      <div className="image24" />
      <div className="image25" />
      <div className="image26" />
      <div className="image27" />
      <div className="image28" />
      <div className="image29" />
      <div className="image30" />
      <div className="image31" />
      <div className="image32" />
      <div className="image33" />
      <div className="image34" />
      <div className="rectangle105" />
      <div className="rectangle106" />
      <div className="rectangle107" />
      <div className="rectangle108" />
      <div className="rectangle109" />
      <div className="rectangle110" />
      <div className="rectangle111" />
      <div className="rectangle112" />
      <div className="rectangle113" />
      <div className="rectangle114" />
      <div className="rectangle115" />
      <div className="rectangle-wrapper">
        <div className="rectangle116" />
      </div>
      <div className="rectangle117" />
      <div className="rectangle117" />
      <img className="rectangle-icon3" alt="" src="/rectangle4.svg" />
      <div className="pigments-by-color">Pigments by Color</div>
      <div className="pigment-paste-wrapper">
        <div className="pigment-paste">{`Pigment Paste `}</div>
      </div>
      <div className="black-pigment">Black Pigment</div>
      <div className="blue-pigment">Blue Pigment</div>
      <div className="green-pigment">Green Pigment</div>
      <div className="pink-pigment">Pink Pigment</div>
      <div className="yellow-pigment">Yellow Pigment</div>
      <div className="category">Category</div>
      <div className="price">Price</div>
      <div className="pigment-type">Pigment Type</div>
      <div className="particle-size">Particle Size</div>
      <div className="health-safety">{`Health & Safety`}</div>
      <div className="component-32">
        <div className="rectangle119" />
        <img className="background-icon2" alt="" src="/background.svg" />
        <div className="component-3-child2" />
        <div className="about-us4">About us</div>
        <div className="privacy-policy3">Privacy Policy</div>
        <div className="contact-us4">Contact us</div>
        <div className="help3">Help</div>
        <div className="copyright-20183">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <img
          className="youtube-color1-icon3"
          alt=""
          src="/youtube-color1@2x.png"
        />
        <img
          className="linkedin-black1-icon3"
          alt=""
          src="/linkedin-black1@2x.png"
        />
        <div className="facebook-black13">
          <div className="rectangle120" />
          <img className="facebook-icon3" alt="" src="/facebook.svg" />
        </div>
        <div className="twitter-black13">
          <div className="rectangle120" />
          <img className="twitter-icon3" alt="" src="/twitter.svg" />
        </div>
        <div className="social-media3">Social Media</div>
        <div className="faulconer-drive3">
          345 Faulconer Drive, Suite 4 • Charlottesville, Canada, 12345
        </div>
        <img
          className="round-place-24px-icon3"
          alt=""
          src="/roundplace24px@2x.png"
        />
        <div className="phone3">
          <div className="div3">(123) 456-7890</div>
          <img
            className="round-phone-24px-icon3"
            alt=""
            src="/roundphone24px.svg"
          />
        </div>
        <img
          className="round-local-printshop-24px-icon3"
          alt=""
          src="/roundlocalprintshop24px@2x.png"
        />
        <div className="component-3-child3" />
        <img className="logo-lift-icon2" alt="" src="/logo-lift.svg" />
      </div>
      <img className="paste-child" alt="" src="/rectangle-81@2x.png" />
      <img className="paste-item" alt="" src="/rectangle-82@2x.png" />
      <img className="paste-inner" alt="" src="/rectangle-83@2x.png" />
      <img className="paste-child1" alt="" src="/rectangle-84@2x.png" />
      <img className="paste-child2" alt="" src="/rectangle-85@2x.png" />
      <img className="paste-child3" alt="" src="/rectangle-86@2x.png" />
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
      <div className="red-pigment">Red Pigment</div>
      <div className="image35" />
      <div className="insilico1">Insilico</div>
      <div className="contact-us5">Contact Us</div>
      <div className="location1">Location</div>
      <img className="layer-1-2-icon" alt="" src="/layer-12.svg" />
      <div className="image36" />
      <img className="image-1-icon2" alt="" src="/image-11@2x.png" />
      <div className="paste-child4" />
      <img
        className="arrow-left-circle-icon1"
        alt=""
        src="/arrowleftcircle1.svg"
        onClick={onArrowLeftCircleIconClick}
      />
      <img className="paste-child5" alt="" src="/rectangle-12@2x.png" />
      <div className="baisiyou-ink2" onClick={onBaisiyouInkTextClick}>
        Baisiyou Ink
      </div>
    </div>
  );
};

export default Paste;
