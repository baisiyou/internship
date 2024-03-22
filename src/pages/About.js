import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
const locales = {
  en: { title: 'English' },
  zh: { title: '中文' },
  fr: { title: 'Français' },
};
const About = () => {
  const { t, i18n } = useTranslation();
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
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);
  const onProductTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);
  const onContactUsTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const onCartText2Click = useCallback(() => {
    navigate("/cart");
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
  const onCommentTextClick = useCallback(() => {
    navigate("/crud-app");
  }, [navigate]);
  const onContactUsText2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const onPasteTextClick = useCallback(() => {
    navigate("/paste");
  }, [navigate]);
  return (
    <div className="about">
      <div className="about-child" />
      <div className="frame-div">
        <img
          className="frame-child6"
          alt=""
          src="/rectangle-130@2x.png"
          data-scroll-to="rectangleImage"
          onClick={onRectangleImageClick}
        />
        <img
          className="frame-child7"
          alt=""
          src="/rectangle-131@2x.png"
          data-scroll-to="rectangleImage1"
          onClick={onRectangleImage1Click}
        />
      </div>
      <div className="baisiyoutech-co-ltd">{`Baisiyoutech Co., Ltd. specializes in producing various types of inks. These inks include thermosensitive ink, conductive ink, electronic ink, inkjet printing ink, PEDOT-PSS transparent electrode ink and so on. We have strong technical strength and top technical personnel, with R&D laboratories and production plants in China and Canada.`}</div>
      <img className="about-item" alt="" src="/rectangle-76@2x.png" />
      <div className="rectangle42" />
      <div className="our-story">Our Story</div>
      <div className="in-our-quest-container">
        <p className="in-our-quest">
          In our quest for innovation, we embarked on a journey to develop
          thermosensitive ink. It began with a vision to create a product that
          would revolutionize the way people interact with ink.
        </p>
        <p className="in-our-quest">
          Through rigorous research and experimentation, we overcame challenges
          and obstacles, pushing the boundaries of ink technology. Our dedicated
          team of experts worked tirelessly, driven by a passion for innovation
          and excellence.
        </p>
        <p className="in-our-quest">
          After countless hours of hard work and determination, we achieved a
          breakthrough. Our thermosensitive ink was born, offering a unique and
          interactive experience to users.
        </p>
        <p className="in-our-quest">
          Today, our ink stands as a testament to our commitment to innovation
          and creativity. It has found applications in various industries, from
          security printing to novelty items, making a lasting impact on the
          market.
        </p>
        <p className="in-our-quest">
          As we continue to push the boundaries of ink technology, our journey
          of innovation continues. Inspired by our success, we remain dedicated
          to creating products that inspire and delight users around the world..
        </p>
      </div>
      <img className="about-inner" alt="" src="/rectangle-77@2x.png" />
      <div className="rectangle-parent1">
        <div className="frame-child8" />
        <div className="another-obstacle-to">
          Another obstacle to overcome when making fountain pen inks is to
          reduce the size of ink particles, which are quite large because they
          contain three different components in microcapsules. They must be
          reduced so that the ink can flow smoothly from the pen tip.We reduced
          the particles to a quarter of their original size. Their width is 0.2
          to 0.35 microns, which is about 400 times narrower than a human hair. 
        </div>
      </div>
      <div className="rectangle43" />
      <div className="with-a-team-container">
        <p className="in-our-quest">
          With a team comprised of doctoral and master's graduates in materials
          science and physical chemistry, we bring a wealth of expertise to the
          table. Our advanced knowledge in these fields enables us to tackle
          complex challenges in ink development with precision and innovation.
        </p>
        <p className="in-our-quest">
          Moreover, our arsenal includes state-of-the-art synthesis and
          detection equipment, allowing us to stay at the forefront of
          technology and maintain a competitive edge in the industry. From
          cutting-edge synthesis techniques to high-precision detection methods,
          we leverage the latest tools and technologies to drive our research
          and development efforts forward.
        </p>
        <p className="in-our-quest">
          By combining our diverse academic backgrounds with advanced equipment
          and technology, we are well-equipped to explore new frontiers in ink
          development and deliver groundbreaking solutions to our customers. Our
          team's interdisciplinary approach fosters creativity, collaboration,
          and excellence, ensuring that we continue to lead the way in ink
          innovation.
        </p>
      </div>
      <div className="our-team">Our Team</div>
      <img className="about-child1" alt="" src="/rectangle-78@2x.png" />
      <img className="about-child2" alt="" src="/rectangle-80@2x.png" />
      <div className="our-values">Our values</div>
      <div className="they-serve-as">
        They serve as a compass guiding who we are, how we work, and what we’re
        focused on next.
      </div>
      <div className="image1" />
      <div className="rectangle44" />
      <div className="image2" />
      <div className="rectangle45" />
      <div className="image3" />
      <div className="rectangle46" />
      <div className="image4" />
      <div className="rectangle47" />
      <div className="image5" />
      <div className="rectangle48" />
      <div className="member-centric">Member Centric</div>
      <div className="we-care-deeply">We care deeply about our members.</div>
      <div className="helpful">Helpful</div>
      <div className="being-helpful-is">Being helpful is part of our DNA.</div>
      <div className="transparent">Transparent</div>
      <div className="we-are-open">
        We are open, honest, and straightforward.
      </div>
      <div className="persistent">Persistent</div>
      <div className="we-dont-give">
        We don't give up when things get challenging.
      </div>
      <div className="better-together">Better together</div>
      <div className="opportunity-exists-for">
        Opportunity exists for everyone at Dave.
      </div>
      <div className="about-child3" />
      <div className="footer-ui3">
        <div className="footer-ui-child4" />
        <div className="about-us7" onClick={onAboutUsTextClick}>
          About us
        </div>
        <div className="privacy-policy3">Privacy Policy</div>
        <div className="disclaimer3">Disclaimer</div>
        <div className="contact-us6" onClick={onContactUsTextClick}>
          Contact us
        </div>
        <div className="help3">Help</div>
        <div className="copyright-20183">
          Copyright © 2024 • Baisiyou Ink Inc.
        </div>
        <div className="information3">
          <div className="social3">
            <img
              className="youtube-color1-icon3"
              alt=""
              src="/youtube-color1@2x.png"
            />
            <img
              className="instagram-black1-icon3"
              alt=""
              src="/instagram-black1@2x.png"
            />
            <img
              className="googleplus-black1-icon3"
              alt=""
              src="/googleplus-black1@2x.png"
            />
            <img
              className="linkedin-black1-icon3"
              alt=""
              src="/linkedin-black1@2x.png"
            />
            <img className="group-icon" alt="" src="/group-29@2x.png" />
            <div className="twitter-black13">
              <div className="rectangle49" />
              <img className="twitter-icon3" alt="" src="/twitter.svg" />
            </div>
            <div className="social-media3">Social Media</div>
          </div>
          <div className="location3">
            <div className="faulconer-drive3">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <img
              className="round-place-24px-icon3"
              alt=""
              src="/roundplace24px@2x.png"
            />
          </div>
          <div className="phone3">
            <div className="div9">(123) 456-7890</div>
            <img
              className="round-phone-24px-icon3"
              alt=""
              src="/roundphone24px.svg"
            />
          </div>
          <div className="fax3">
            <div className="div10">(123) 456-7890</div>
            <img
              className="round-local-printshop-24px-icon3"
              alt=""
              src="/roundlocalprintshop24px@2x.png"
            />
          </div>
        </div>
        <div className="footer-ui-child5" />
        <img className="logo-lift-icon3" alt="" src="/logo-lift.svg" />
      </div>
      <div className="component-53">
        <img className="image-1-icon3" alt="" src="/image-1@2x.png" />
        <div className="baisiyou-ink3">{t('baisiyou_ink')}</div>
        <div className="home4" onClick={onHomeTextClick} style={{ cursor: 'pointer' }}>{t('home')}</div>
        <div className="about-us8" onClick={onAboutUsText2Click}>
          {t('About us')}
        </div>
        <div className="paste3" onClick={onPasteTextClick} style={{ cursor: 'pointer' }}>{t('paste')}</div>
        <div className="ink4" onClick={onInkTextClick} style={{ cursor: 'pointer' }}>
        {t('ink')}
        </div>
        <div className="refills3" onClick={onRefillsTextClick} style={{ cursor: 'pointer' }}>
        {t('refills')}
        </div>
        <div className="pen4" onClick={onPenTextClick} style={{ cursor: 'pointer' }}>
        {t('pen')}
        </div>
        <div className="contact-us7" onClick={onContactUsText2Click} style={{ cursor: 'pointer' }}>
        {t('contact_us')}
        </div>
        <div className="cart3" onClick={onCartText2Click} style={{ cursor: 'pointer' }}>{t('cart')}</div>
        <div className="en">En</div>
      <div className="div2">中</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="fr">Fr</div>
      <div style={{ position: 'absolute', top: '0.7%', left: '55%', width: '35%', backgroundColor: '#F3FAF8', padding: '10px 0', zIndex: '999' }}>
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
        <div className="en3">En</div>
        <div className="div11">中</div>
        <img className="shopping-cart-icon2" alt="" src="/shoppingcart.svg" />
        <div className="product3" onClick={onProductTextClick} style={{ cursor: 'pointer' }}>{t('product')}</div>
        <div className="fr3">Fr</div>
        <div className="comment3"onClick={onCommentTextClick} style={{ cursor: 'pointer' }} >{t('Admin')}</div>
      </div>
    </div>
  );
};

export default About;
