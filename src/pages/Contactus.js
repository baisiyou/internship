import { useCallback } from "react";
import styles from "./Contactus.module.css";
import { useNavigate } from "react-router-dom";
const Contactus = () => {
  const navigate = useNavigate();
  const onAboutUsTextClick = useCallback(() => {
    // Please sync "about" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, []);
  
  const onCartTextClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);
  const onCommentTextClick = useCallback(() => {
    navigate("/crud-app");
  }, [navigate]);
  const onContactusTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);
  const onAboutUsText2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);
  const onPasteTextClick = useCallback(() => {
    navigate("/paste");
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

  const onContactus2TextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);
  const onProductText2Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);


  return (
    <div className={styles.contactus}>
      <div className={styles.getInTouch}>Get in touch with us</div>
      <div className={styles.contact}>Contact</div>
      <img className={styles.contactusChild} alt="" src="/rectangle-25@2x.png" />
      <img className={styles.contactusItem} alt="" src="/rectangle-26@2x.png" />
      <div className={styles.contactUs}>Contact us</div>
      <div className={styles.salesInquiries}>Sales inquiries</div>
      <div className={styles.customerSupport}>Customer support</div>
      <div className={styles.otherRequests}>Other requests</div>
      <div className={styles.generalInquiries}>General inquiries</div>
      <div className={styles.call1514}>Call +1 514 123 4567</div>
      <div className={styles.ourAddress}>Our address</div>
      <div className={styles.mailingAddress}>Mailing address</div>
      <div className={styles.baisiyouInkInc}>Baisiyou Ink, Inc.</div>
      <div className={styles.parkAveS}>123 Park Ave. S PMB 14744</div>
      <div className={styles.montrealQuebec}>{`Montreal, Quebec `}</div>
      <div className={styles.officeAddress}>Office address</div>
      <div className={styles.baisiyouInk}>Baisiyou Ink</div>
      <div className={styles.west18thStreet}>
        18 West 18th Street, 6th Floor
      </div>
      <div className={styles.montrealQuebec1}>Montreal, Quebec</div>
      <div className={styles.contactusInner} />
      <div className={styles.footerUi}>
        <div className={styles.footerUiChild} />
        <div className={styles.aboutUs} onClick={onAboutUsTextClick} style={{ cursor: 'pointer' }}>
          About us
        </div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.disclaimer}>Disclaimer</div>
        <div className={styles.contactUs1}>Contact us</div>
        <div className={styles.help}>Help</div>
        <div className={styles.copyright2018}>
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className={styles.information}>
          <div className={styles.social}>
            <img
              className={styles.youtubeColor1Icon}
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className={styles.instagramBlack1Icon}
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className={styles.googleplusBlack1Icon}
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className={styles.linkedinBlack1Icon}
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className={styles.socialChild} alt="" src="/group-29@2x.png" />
            <div className={styles.twitterBlack1}>
              <div className={styles.rectangle} />
              <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
            </div>
            <div className={styles.socialMedia}>Social Media</div>
          </div>
          <div className={styles.location}>
            <div className={styles.faulconerDrive}>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className={styles.roundPlace24pxIcon}
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className={styles.phone}>
            <div className={styles.div}>(123) 456-7890</div>
            <img
              className={styles.roundPhone24pxIcon}
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className={styles.fax}>
            <div className={styles.div1}>(123) 456-7890</div>
            <img
              className={styles.roundLocalPrintshop24pxIcon}
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className={styles.footerUiItem} />
        <img className={styles.logoLiftIcon} alt="" src="/logo-lift.svg" />
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-27@2x.png" />
      <div className={styles.call15141}>Call +1 514 123 4567</div>
      <div className={styles.call15142}>Call +1 514 123 4567</div>
      <div className={styles.call15143}>Call +1 514 123 4567</div>
      <div className={styles.component5}>
        <div className={styles.rectangle}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.baisiyouInk1}>Baisiyou Ink</div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutUs1 } onClick={onAboutUsTextClick} style={{ cursor: 'pointer' }}>About Us</div>
          <div className={styles.paste } onClick={onPasteTextClick} style={{ cursor: 'pointer' }}>Paste</div>
          <div className={styles.ink} onClick={onInkTextClick} style={{ cursor: 'pointer' }}>Ink</div>
          <div className={styles.refills} onClick={onRefillsTextClick} style={{ cursor: 'pointer' }}>
            Refills
          </div>
          <div className={styles.pen} onClick={onPenTextClick} style={{ cursor: 'pointer' }}>Pen</div>
          <div className={styles.contactUs2} onClick={onContactusTextClick} style={{ cursor: 'pointer' }}>Contact Us</div>
          <div className={styles.cart} onClick={onCartTextClick} style={{ cursor: 'pointer' }}>Cart</div>
          <div className={styles.en}>En</div>
          <div className={styles.div2}>中</div>
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart.svg"
          />
          <div className={styles.product} onClick={onProductText2Click} style={{ cursor: 'pointer' }}>Product</div>
          <div className={styles.fr}>Fr</div>
          <div className={styles.comment}>Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
