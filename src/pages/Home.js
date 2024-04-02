import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
const locales = {
  en: { title: 'English' },
  zh: { title: '中文' },
  fr: { title: 'Français' },
};
const Home = () => {
  const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState(0);
  const navigate = useNavigate();

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
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);
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
    <>
    <div className="home">
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
          className="rectangle-icon"
          alt=""
          src="/rectangle-4@2x.png"
          onClick={onRectangleImage2Click}
        />
        
      </div>
      <div className="thermochromic-microcapsule-ink">
      {t('thermochromicMicrocapsuleInk')}
      </div>
      <div className="thermosensitive-ink-is-the-mos-wrapper">
        <div className="thermosensitive-ink-is-container">
          <p className="thermosensitive-ink-is">
          {t('thermosensitiveInkDescription1')}
          </p>
        </div>
      </div>
      <img className="home-child" alt="" src="/rectangle-71@2x.png" />
      <img className="home-item" alt="" src="/rectangle-73@2x.png" />
      <img className="home-inner" alt="" src="/rectangle-74@2x.png" />
      <img className="home-child1" alt="" src="/rectangle-75@2x.png" />
      <img className="home-child2" alt="" src="/rectangle-72@2x.png" />
      <div className="attractive-erasable-pen">{t('attractive_erasable_pen')}</div>
      <img className="home-child3" alt="" src="/rectangle-6@2x.png" />
      <img className="home-child4" alt="" src="/rectangle-7@2x.png" />
      <div className="rectangle" />
      <div className="rectangle1" />
      <div className="available-temperatures-container">
        <span>
          <span>{t('Available_Temperatures')}</span>
          <span className="span">{` : `}</span>
        </span>
        <span className="c">~60°C</span>
      </div>
      <div className="cautions-we-advise">
        {t('Cautions')}
      </div>
      <div className="product-features">{t('product_features')}</div>
      <div className="rectangle2" />
      <div className="rectangle3" />
      <div className="rectangle4" />
      <div className="rectangle5" />
      <div className="erasable-properties">{t('Erasable_Properties')}</div>
      <div className="thermosensitive-ink-is1">
      {t('thermosensitiveInk')}
      </div>
      <div className="temperature-reactivity">{t('temperature_reactivity')}</div>
      <div className="this-ink-undergoes">
      {t('thermosensitiveInkDescription')}
      </div>
      <div className="temperature-sensitivity"></div>
      <div className="given-its-sensitivity">
      {t('Given_its_sensitivity')}
      </div>
      <img className="home-child5" alt="" src="/rectangle-13@2x.png" />
      <div className="the-reversible-thermochromic">
      {t('the_reversible_thermochromic')}
      </div>
      <div className="magic-erasable-ink">{t('magic_erasable_ink')}</div>
      <img className="home-child6" alt="" src="/rectangle-37@2x.png" />
      <img className="home-child7" alt="" src="/rectangle-41@2x.png" />
      <i className="our-micro-encapsulated-thermos">
      {t('microEncapsulatedThermosensitiveInkDescription')}
      </i>
      <div className="thermosensitive-micro-encapsul">
      {t('thermosensitiveMicroEncapsulatedInk')}
      </div>
      <img className="home-child8" alt="" src="/rectangle-44@2x.png" />
      <div className="rectangle-div" />
      <div className="footer-ui">
        <div className="footer-ui-child" />
        <div className="about-us" onClick={onAboutUsTextClick} style={{ cursor: 'pointer' }}>
          {t('About us')}
        </div>
        <div className="privacy-policy">{t('privacy_policy')}</div>
        <div className="disclaimer">{t('disclaimer')}</div>
        <div className="contact-us" onClick={onContactusTextClick} style={{ cursor: 'pointer' }}>
        {t('contact us')}
        </div>
        <div className="help">{t('help')}</div>
        <div className="copyright-2018">
          Copyright © 2024 • {t('baisiyou_ink')}.
        </div>
        <div className="information">
          <div className="social">
            <img
              className="youtube-color1-icon"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="social-child" alt="" src="/group-29@2x.png" />
            <div className="twitter-black1">
              <div className="rectangle6" />
              <img className="twitter-icon" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media">Social Media</div>
          </div>
          <div className="location">
            <div className="faulconer-drive">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone">
            <div className="div">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax">
            <div className="div1">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-item" />
        <img className="logo-lift-icon" alt="" src="/logo-lift.svg" />
      </div>
      <div className="component-4" />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="baisiyou-ink">Baisiyou Ink</div>
      
      <div className="cart" onClick={onCartTextClick} style={{ cursor: 'pointer' }}>{t('cart')}</div>
      
      <div className="en">En</div>
      <div className="div2">中</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="fr">Fr</div>
      <div style={{ position: 'absolute', top: '0.7%', left: '51%', width: '20%', backgroundColor: '#F3FAF8', padding: '10px 0px', zIndex: '999' }}>
  <ul style={{ margin: '0', padding: '0', listStyleType: 'none', textAlign: 'center' }}>
    {Object.keys(locales).map((locale) => (
      <li key={locale} style={{ display: 'inline-block', margin: '0 10px' }}>
        <button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal',fontSize: 'large' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
          {locales[locale].title}
        </button>
      </li>
    ))}
  </ul>
</div>


      <div className="home1" onClick={onHomeTextClick} style={{ cursor: 'pointer' }}>{t('home')}</div>
      <div className="about-us1" onClick={onAboutUsText2Click}>
        {t('About us')}
      </div>
      <div className="paste" onClick={onPasteTextClick} style={{ cursor: 'pointer' }}>{t('paste')}</div>
      <div className="ink" onClick={onInkTextClick}>
      {t('ink')}
      </div>
      <div className="refills" onClick={onRefillsTextClick}>
        {t('refills')}
      </div>
      <div className="pen" onClick={onPenTextClick}>
        {t('pen')}
      </div>
      
      <div className="contact-us1" onClick={onContactus2TextClick} style={{ cursor: 'pointer' }}>
      {t('contact_us')}
      </div>
      <div className="product-2" onClick={onProductText2Click} style={{ cursor: 'pointer' }}>{t('product')}</div>
      <div className="comment" onClick={onCommentTextClick} style={{ cursor: 'pointer' }}>{t('Admin')}</div>
    </div></>
  );
};

export default Home;
