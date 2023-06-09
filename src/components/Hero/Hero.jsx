import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/* Left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-paragraph">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue) " size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter counter">
            <div className="flexColCenter count">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter count">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter count">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* Right section */}
        <div className="hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
