/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import icon1 from "./../../../assets/img/contact_icon1.svg";
import icon2 from "./../../../assets/img/contact_icon2.svg";
import co1 from "./../../../assets/img/co-1.svg";
import co2 from "./../../../assets/img/co-2.svg";
import hymarket from "../../../assets/img/haymarket_1.webp";
import pensil from "../../../assets/img/pensil_1.webp";
import freightwalla_1 from "../../../assets/img/freightwalla_1.webp";
// import About from './../About/About';
// import hymarket from "../../../assets/img/haymarket_1.webp"
// import Carousel from "./../../Carousel";
import Question from "../../Question";
import "./hire.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Course from "./../course/Course";
import data from "../../../data";
import { Link } from "react-router-dom";
const Hirefromus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Full Stack JavaScript',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1  // Replace with actual path
  //   },
  //   {
  //     id: 2,
  //     title: 'Mastering React',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 3,
  //     title: 'React Native',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 4,
  //     title: 'React Native and Node',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1// Replace with actual path
  //   },
  //   {
  //     id: 5,
  //     title: 'Node.js',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 6,
  //     title: 'Flutter',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 7,
  //     title: 'Python Full Stack',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 8,
  //     title: 'UI/UX Design',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 9,
  //     title: 'Data Science and Python',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 10,
  //     title: 'Data Engineering and Python',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 11,
  //     title: 'AI and Python',
  //     backgroundImage: co1, // Replace with actual path
  //     img: co1 // Replace with actual path
  //   },
  //   {
  //     id: 12,
  //     title: 'ML and Python',
  //     backgroundImage: co1, // Replace with actual path
  //     img:co1// Replace with actual path
  //   }
  // ];
  const getHeightClass = (title) => {
    return title.split(" ").length > 5 ? "h-[100%]" : "h-[100%]";
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-6xl header">
          <div className="text-center">
            <h1 className="text-3xl font-bold  text-red-600 sm:text-[3em] tracking-wide w-[100%] sm:w-[80%] mx-auto sm:leading-[50px]">
              Discover exceptional talent to empower your business
            </h1>
            <p className="mt-6 text-[1rem] leading-6 text-gray-600 sm:w-[60%] mx-auto py-10">
              Hire the finest candidates selected through rigorous screening,
              trained by industry experts, and independently assessed for your
              success
            </p>
          </div>
          <div className="img1">
            <img src={icon2} alt="" className="img1a" />
            <img src={icon1} alt="" className="img2a" />
          </div>
          <div className=" flex items-center justify-center gap-x-6">
            <a
              href="#"
              className=" bg-red-600 px-3.5 py-2.5 text-sm font-semibold rounded-3xl text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start hiring
            </a>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-black sm:text-[3.0em] text-center mt-[6%]">
          Profiles we offer
        </h1>
        {/* <CoursesComponent posts={posts} /> */}
        <div className="py-4 sm:py-1 w-full flex justify-center mx-auto">
          <div className="mx-auto max-w-8xl w-[100%] lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-1 sm:mt-16 sm:pt-2  lg:max-w-none lg:grid-cols-2 lg:w-[60%] lg:mx-auto">
              {data.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between p-4 rounded-3xl border border-opacity-50 hover:border-red-100 w-full relative hover:shadow-2xl transition-shadow duration-500 h-40" // Adjust the height as needed
                  style={{
                    backgroundImage: `url(${post.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-gray-600 w-60">
                      <span className="absolute inset-0 w-[60%]" />
                      {post.title}
                    </h3>
                  </div>
                  <Link to={`/pricing/${post.title}`}>
                    <p className="text-[12px] mt-6 flex items-center text-blue-500">
                      Know More{" "}
                      <IoIosArrowRoundForward className="text-[16px]" />
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-black sm:text-[3.13em] text-center mt-[10%] mb-1">
          Partner companies
        </h1>
        <span className="text-[15px] flex justify-center  tracking-tight text-black sm:text-[1.13em]  sm:leading-[80px] ">
          Our graduates are involved in building
        </span>
        {/* <Join /> */}
        <div className="slider-wrapper1 right flex align-middle justify-center mb-20">
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
      </div>
      <h1 className="text-2xl font-bold tracking-wide text-black sm:text-[3em] text-center mt-[5%] mb-1">
        Hear from our partners
      </h1>
      <span className="text-sm flex justify-center w-[65%] mx-auto tracking-tight text-black sm:text-[1em]  sm:leading-[80px] mt-1 mb-10 align-middle">
        Discover Inspiring Stories and Experiences Shared by Our Valued Partners
      </span>
      {/* <Carousel /> */}
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
      <div className="">
        <h1 className="text-2xl font-bold tracking-wide text-black sm:text-[3em] text-center mt-[5%] my-[5%]">
          Why ALag Academy?
        </h1>
        <div className="flex flex-col w-[85%] sm:w-[80%] sm:flex-row  mx-auto mt-10 gap-5 p-2">
          <div className="1 bg-purple-50 p-5 rounded-3xl">
            <h1>Access a diverse talent pool</h1>
            <span>
              Hire the best candidates from a vast talent pool with a range of
              skills and expertise
            </span>
          </div>
          <div className="1  bg-purple-50 p-5 rounded-3xl">
            <h1>Access a diverse talent pool</h1>
            <span>
              Hire the best candidates from a vast talent pool with a range of
              skills and expertise
            </span>
          </div>
          <div className="1  bg-purple-50 p-5 rounded-3xl">
            <h1>Access a diverse talent pool</h1>
            <span>
              Hire the best candidates from a vast talent pool with a range of
              skills and expertise
            </span>
          </div>
        </div>
      </div>

      <div className="question-container sm:flex w-[90%] mx-auto top-0 sm:mt-24">
        <h1 className="sticky-header w-auto text-xl md:text-5xl sm:mt-24 sm:text-3xl text-center font-bold mt-12 mb-5 !leading-snug">
          Frequently Asked Questions
        </h1>
        <Question />
      </div>
      {/* <Course /> */}

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
  );
};

export default Hirefromus;
