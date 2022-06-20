import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiPexels } from "react-icons/si";
import hero from "../assets/hero-reborn.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#e5e5e5]">
      <div className="grid grid-cols-12">
        <div className=" h-screen col-start-1 col-end-3 w-full flex flex-col p-5 pl-10">
          <div>
            <ul className="flex flex-col items-start font-medium font-cuprum text-lg tracking-wide">
              <li>
                <Link to="/projects">Projects</Link>
              </li>{" "}
              <li>
                <Link to="/about">About</Link>
              </li>{" "}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-end absolute bottom-8 font-cuprum">
            <div className="font-medium text-2xl tracking-[0.2rem]">
              {" "}
              SAJAL{" "}
            </div>
            <div className="font-light text-base tracking-wide">
              {" "}
              Developer | Photographer
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-11 flex justify-center items-center">
          <img src={hero} className="h-[36rem] rounded-full" />
        </div>
        <div className="col-start-11 col-end-13 flex justify-end items-center p-5 pr-10">
          <div className="flex flex-col space-y-14 opacity-95">
            <div className="hover:animate-wiggle">
              <a
                href="https://www.linkedin.com/in/sajal-devnath/"
                target="_blank"
              >
                <BsLinkedin size={30} color="#292929" />
              </a>
            </div>
            <div className="hover:animate-wiggle">
              <a href="https://github.com/SajalDevnath" target="_blank">
                <BsGithub size={30} color="#292929" />
              </a>
            </div>
            <div className="hover:animate-wiggle">
              <a
                href="https://www.instagram.com/sajal_devnath/"
                target="_blank"
              >
                <BsInstagram size={30} color="#292929" />
              </a>
            </div>
            <div className="hover:animate-wiggle">
              <a
                href="https://www.facebook.com/profile.php?id=100005565435256"
                target="_blank"
              >
                <BsFacebook size={30} color="#292929" />
              </a>
            </div>
            <div className="hover:animate-wiggle">
              <a
                href="https://www.pexels.com/@sajal-devnath-15363403/"
                target="_blank"
              >
                <SiPexels size={30} color="#292929" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
