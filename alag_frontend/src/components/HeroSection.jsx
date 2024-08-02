/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import "./HeroSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import Navbar from './Navbar';
import icon1 from "../assets/img/img1.svg";
import icon2 from "../assets/img/img2.svg";
import icon3 from "../assets/img/img3.svg";
import icon4 from "../assets/img/img4.svg";
import hymarket from "../assets/img/haymarket_1.webp";
import pensil from "../assets/img/pensil_1.webp";
import freightwalla_1 from "../assets/img/freightwalla_1.webp";
import backgroundImage from "../assets/img/footerimg.svg";
import cap from "../assets/img/img5.svg";
import co1 from "../assets/img/co-1.svg";
import co2 from "../assets/img/co-2.svg";
import img1 from "../assets/img/img6.webp";
import img2 from "../assets/img/img7.svg";
import icon5 from "../assets/img/humanitarian.png";
import icon6 from "../assets/img/employer.png";
import icon7 from "../assets/img/book.png";
import icon8 from "../assets/img/doctors-office.png";
import comingsoon from "../assets/img/comingsoon.jpg";
import student from "../assets/img/img8.webp";
import contact from "../assets/img/img9.webp";
import logo from "../assets/img/logo4.png";
import CoursesComponent from "./CoursesComponent";
import Slider1 from "../components/Slider1";
import bg1 from "./../assets/img/bg7.png";
import bg11 from './../assets/img/node+react.png'
import bg6 from './../assets/img/Ai+ python.png'
import { Link } from "react-router-dom";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import sliderlogo1 from '../assets/img/jio_logo.png';
// import sliderlogo2 from '../assets/img/venkusa_logo.webp';
// import sliderlogo3 from '../assets/img/openinapp_logo.jpeg';
// import sliderlogo4 from '../assets/img/haymarket_logo.webp';
// import sliderlogo5 from '../assets/img/freightwalla.jpeeg';
// import sliderlogo6 from '../assets/img/designqandy_logo.jpeg';
import bg3 from "./../assets/img/javascript.png";

const HeroSection = () => {
  // const CustomPrevArrow = (props) => {
  //     const { className, onClick } = props;
  //     return (
  //         <FaArrowLeft className={className} onClick={onClick} />
  //     );
  // };

  // const CustomNextArrow = (props) => {
  //     const { className, onClick } = props;
  //     return (
  //         <FaArrowRight className={className} onClick={onClick} />
  //     );
  // };
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     centerMode: true,
  //     prevArrow: <CustomPrevArrow />,
  //     nextArrow: <CustomNextArrow />
  // };

  const posts = [
    {
      id: 1,
      title: "Full Stack JavaScript",
      description:
        "Explore the latest trends and technologies in web development.",
      backgroundImage: bg3,
      image: "JavaScript",
    },
    {
      id: 2,
      title: "React JS",
      description:
        "The world can’t live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to making bank transactions. Thanks to efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library’s fundamentals and work with a simple demo.",
      backgroundImage: bg1,
      image: "React",
    },
    {
      id: 3,
      title: "React Native & FireBase",
      description:
        "React Native allows you to build mobile applications using React. Learn to develop high-quality mobile apps for both iOS and Android platforms with this versatile framework.",
      backgroundImage: bg11,
      image: "ReactNative",
    },
    {
        "id": 11,
        "title": "AI & Python",
        "description": "Artificial Intelligence with Python explores how to create intelligent systems using Python’s extensive libraries. Gain insights into building AI models and implementing machine learning algorithms.",
        "backgroundImage":bg6,
        image: "AIandPython",
    }
  ];

  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <div className="relative isolate px-6 pt-4 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="img">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-2 lg:py-5">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-red-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-wide text-red-600 sm:text-6xl">
              Launch your dream career with us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Master in-demand skills, gain a competitive edge, and accelerate
              your career with our{" "}
              <span className="text-red-600">industry-focused training</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="img3">
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
      </div>

      <section
        className="section bg-contain bg-no-repeat w-full min-h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-center items-center mt-20">
          <h2 className="text-[#0D0029CC] mt-4 mb-0 text-2xl font-bold leading-tight lg:text-5xl">
            Courses we offer
          </h2>
        </div>
        <CoursesComponent posts={posts} />
      </section>

      <div className="section is-rel">
        <div className="padding-global-v1">
          <div className="container">
            <div className="padding-vertical-60px-60px">
              <div className="notification-bar">
                <div className="heading-style-h5">
                  Take a look into your desired course
                  <br />
                </div>
                <div className="popup-open">
                  <a href="/courses" className="button w-button">
                    View Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-bottom is-32px">
        <div className="heading-block max-800px">
          <h2 className="heading-style-h2 text-align-center">
            Fynd Academy graduates <br />
            have successfully landed their dream positions in
          </h2>
        </div>
      </div>
      <div className="slider-wrapper left">
        <div className="item ite1 rounded-3xl">
          <div className="profile">
            <img src={icon1} alt="" className="w-20" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite2">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite3">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite4">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite5">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite6">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite7">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
        <div className="item ite8">
          <div className="profile">
            <img src={icon1} alt="" />
          </div>
          <div className="cs-text-16px flex justify-center ">
            Avijeet Shrivastava
          </div>
          <div className="cs-text-16px flex justify-center ">is in </div>
          <div className="company-logo flex justify-cente py-2">
            <img
              src={logo}
              loading="lazy"
              alt="fynd academy logo"
              className="h-16 w-10 px-3"
            />
          </div>
        </div>
      </div>

      <div className="padding-global-v1">
        <div className="container">
          <div className="padding-vertical-60px-60px top-bottom-60pc">
            <div className="couse-banner">
              <img
                src={cap}
                loading="lazy"
                alt="cap masters images"
                className="cap"
              />
              <div className="block-new">
                <h2 className="heading-60px sm:text-sm mb-5">
                  Get a chance to win upto
                </h2>
                <h2 className="heading-60px ffd140">100% Scholarship</h2>
                <div className="tp-bt-24px">
                  <div className="custom-32px">
                    Take the Python scholarship test now!
                  </div>
                </div>
                <div className="div-block-508">
                  <a
                    data-w-id="a31458a0-b47f-8541-e513-26523ce7b379"
                    href="#"
                    className="button-white w-inline-block"
                  >
                    <div>Register Now</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="px-4 sm:px-0">
          <div className="container">
            <div className="py-10 sm:py-24 px-0 lg:px-28">
              <div className="flex flex-col lg:flex-row lg:gap-8 ">
                <div className="lg:max-w-lg ">
                  <img src={img1} className="w-full h-full rounded-lg" />
                </div>
                <div className="lg:max-w-md mt-8 lg:mt-0 im">
                  <div className="mb-16">
                    <div>
                      <h2 className="text-3xl font-bold">
                        Get all the support you need
                      </h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="max-w-xs mx-auto">
                      <div className="w-16 h-16">
                        <img src={icon5} alt="" />
                      </div>
                      <div className="mt-10 mb-2">
                        <div className="text-xl font-semibold">Community</div>
                      </div>
                      <div className="text-base">
                        Network with like-minded peers, share knowledge and
                        explore growth opportunities
                      </div>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <div className="w-16 h-16">
                        <img src={icon6} alt="" />
                      </div>
                      <div className="mt-10 mb-2">
                        <div className="text-xl font-semibold">
                          Interactive Portfolio
                        </div>
                      </div>
                      <div className="text-base">
                        Present projects that demonstrate your skills and
                        expertise to enhance your visibility to recruiters
                      </div>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <div className="w-16 h-16">
                        <img src={icon7} alt="" />
                      </div>
                      <div className="mt-10 mb-2">
                        <div className="text-xl font-semibold">
                          Resource Library
                        </div>
                      </div>
                      <div className="text-base">
                        Access our resource library to boost your expertise and
                        succeed in your academic and professional pursuits
                      </div>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <div className="w-16 h-16">
                        <img src={icon8} alt="" />
                      </div>
                      <div className="mt-10 mb-2">
                        <div className="text-xl font-semibold">
                          Career Assistance
                        </div>
                      </div>
                      <div className="text-base">
                        Guidance to apply for exciting career opportunities
                        through our expansive network
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-bottom">
        <div className="text-align-center">
          <div className="max-width-large align-center pb-12">
            <div className="margin-bottom">
              <h2 className="heading-style-h2">From trainees to titans</h2>
              <div className="margin-top-20px">
                <div className="text-16px-v1 sm:text-2xl">
                  Hear from our amazing students who chose us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto py-10">
                <div id="demo">
                    <Slider {...settings}>
                        <div className="carousel-item active">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing to your code, I don't know what will. This was the very best explanation of frameworks for beginners that I've ever seen.</p>
                                <img src="https://i.imgur.com/lE89Aey.jpg" alt="Nick Doe" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing to your code, I don't know what will. This was the very best explanation of frameworks for beginners that I've ever seen.</p>
                                <img src="https://i.imgur.com/QptVdsp.jpg" alt="Cromption Greves" />
                                <div id="image-caption">Cromption Greves</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing to your code, I don't know what will. This was the very best explanation of frameworks for beginners that I've ever seen.</p>
                                <img src="https://i.imgur.com/jQWThIn.jpg" alt="Harry Mon" />
                                <div id="image-caption">Harry Mon</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div> */}

      <div className="w-full  tracking-wider  items-center ">
        <Slider1 />
      </div>

      <div className="section is-rel">
        <div className="padding-global-v1">
          <div className="container">
            <div className="padding-vertical-60px-60px">
              <div className="notification-bar">
                <div className="heading-style-h5">
                  Take a look into your desired course
                  <br />
                </div>
                <div className="popup-open">
                  <a href="/courses" className="button w-button">
                    View Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-purple-50 flex flex-col md:flex-row items-center justify-center md:justify-between p-10 md:p-5 rounded-lg max-w-screen-xl mx-auto my-10">
        <img
          src={comingsoon}
          alt="Coming Soon"
          className="absolute top-[-15px] right-0 z-10"
        />
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <img
            src={img2}
            alt="AI Powered Resume Builder"
            className="w-full h-auto max-w-md"
          />
        </div>
        <div className="mt-10 md:mt-0 w-full md:w-1/2 text-center md:text-left sm:px-5 ">
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 ">
            The ultimate AI powered resume builder
          </h1>
          <p className="mt-6 text-lg md:text-sm text-gray-600">
            Create stunning resumes effortlessly! Our AI-powered resume builder
            is simple to use and loaded with powerful features. Craft customized
            resumes for any job within minutes. Enhance your chances of securing
            an interview with precision.
          </p>
        </div>
      </div>

      <div className="max-36em">
        <h2 className="heading-style-h2 text-2xl sm:text-4xl">
          Our partner companies
        </h2>
      </div>

      <div className="slider-wrapper1 right">
        <div className="i1 item1">
          <img src={hymarket} alt="" />
        </div>
        <div className="i1 item2">
          <img src={pensil} alt="" />
        </div>
        <div className="i1 item3">
          <img src={freightwalla_1} alt="" className="h-16" />
        </div>
        <div className="i1 item4">
          <img src={hymarket} alt="" />
        </div>
        <div className="i1 item5">
          <img src={pensil} alt="" />
        </div>
        <div className="i1 item6">
          <img src={freightwalla_1} alt="" className="h-16" />
        </div>
        <div className="i1 item7">
          <img src={hymarket} alt="" />
        </div>
        <div className="i1 item8">
          <img src={pensil} alt="" />
        </div>
      </div>

      <div className="certificates w-[80%] mx-auto mt-24 flex flex-col md:flex-row gap-5 ">
        <div className="left-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
          <img
            src={student}
            alt="Student"
            className="transform transition-transform duration-500 ease-in-out hover:scale-150 img"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-lg md:text-2xl font-bold">
              <Link to='/register'>Register for Free</Link>
            </h2>
          </div>
        </div>
        <div className="right-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
          <img
            src={contact}
            alt="Contact"
            className="transform transition-transform duration-500 ease-in-out hover:scale-150 img"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-lg md:text-2xl font-bold">
              Hire From Us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
