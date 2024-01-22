import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Cover.module.scss"; // Import your SCSS file
import mysocialmedialogo from "../assets/svgs/mysocialmedialogo.svg";

// {% load static %}

const Navigation = ({ setLogoVisible }) => {
  const handleLinkClick = () => {
    setLogoVisible(false);
    setTimeout(() => {
      setLogoVisible(true);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.headerWrapper}>
      <nav>
        <div className="row">
          <div
            className="fixed-top"
          >
            <ul className="d-flex justify-content-center">
              <li>
                <Link
                  onClick={() => {
                    scrollToSection('section1');
                    handleLinkClick();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection('section2')}>
                  Features
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection('section3')}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const CoverPage = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set the logo to be visible
    setLogoVisible(true);
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const isBelowSection1 = window.scrollY < section1.offsetTop;
      setLogoVisible(isBelowSection1);
      const isInSection1 = window.scrollY > section1.offsetTop;
      setLogoVisible(!isInSection1);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <Navigation setLogoVisible={setLogoVisible} />

      <main>
        <div id="section1" className={styles.section}>
          <div className="container">
            <div className="row d-flex text-center py-2">
              <div id="welcome-content" className="col-12">
                {/* BEFORE BUILDING FOR PRODUCTION CHANGE THE IMG TO USE DJANGOS STATIC */}
                {/* <img src="{% static 'svgs/mysocialmedialogo.svg' %}" alt="Social Logo"></img> */}
                {logoVisible ? (
                  <img
                    id="logo"
                    src={mysocialmedialogo}
                    alt="Social Logo"
                    className={styles.logoAppear}
                  />
                ) : (
                  <img
                    id="logo"
                    src={mysocialmedialogo}
                    alt="Social Logo"
                    className={styles.logoAppearHidden}
                  />
                )}

                <p className="lead">Welcome to Social!</p>

                <p className="lead">
                  Social's objective is to bring back the old internet
                  communities together, where you build your own algorithm
                </p>

                <p className="lead">Sign-up now to have access to Social</p>

                <p className="lead">
                  <Link to="" className="btn btn-lg btn-secondary mx-2">
                    Login
                  </Link>
                  <Link to="" className="btn btn-lg btn-primary fw-bold mx-2">
                    Sign-up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="section2" className={styles.section}>
          <div className="container">
            <div className="row text-center py-2">
              <div className="col-12">
                <div className="feature">
                  <h3>Create Accounts</h3>
                  <p>
                    Join our community by creating your personalized account.
                    Customize your profile to reflect your personality.
                  </p>
                </div>

                <div className="feature">
                  <h3>Share Images and Videos</h3>
                  <p>
                    Express yourself through visual content. Share images and
                    videos with your friends and followers.
                  </p>
                </div>

                <div className="feature">
                  <h3>Chat with Friends</h3>
                  <p>
                    Stay connected with your friends through our intuitive chat
                    system. Have private conversations or create group chats.
                  </p>
                </div>

                <div className="feature">
                  <h3>Create Groups</h3>
                  <p>
                    Form communities around shared interests. Create and join
                    groups to connect with like-minded individuals.
                  </p>
                </div>

                <div class="feature">
                  <h3>Control Your Feed</h3>
                  <p>
                    Take control of your experience. Customize your feed by
                    adjusting the algorithm to see content that matters most to
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section3" className={styles.section}>
          <div className="container">
            <div className="row text-center py-2">
              <div className="col-12">

                <h2>General Inquiries:</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                </p>
                <p>Phone: +123-456-7890</p>

                <h2>Customer Support:</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:support@yourcompany.com">
                    support@yourcompany.com
                  </a>
                </p>
                <p>Phone: +123-456-7890</p>

                <h2>Business Inquiries:</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:partnerships@yourcompany.com">
                    partnerships@yourcompany.com
                  </a>
                </p>
                <p>Phone: +123-456-7890</p>

                <h2>Address:</h2>
                <p>Social Street Address City, State, ZIP Code Country</p>
                <p>
                  We appreciate your interest in <strong>Social</strong> and
                  look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CoverPage;
