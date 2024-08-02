/* eslint-disable no-unused-vars */
import React , {useEffect}from 'react';
import icon1 from './../../../assets/img/contact_icon1.svg';
import icon2 from './../../../assets/img/contact_icon2.svg';
import './style.css';
import CoursesComponent from "../../CoursesComponent"
import co1 from './../../../assets/img/co-1.svg'
import co2 from './../../../assets/img/co-2.svg'
// import soon from '../../../assets/img/comingsoon.jpg'
import Join from './../../Join';
import cer from './../../../assets/img/certificat.jpg'
import student from './../../../assets/img/img8.jpg'
import contact from './../../../assets/img/img9.jpg'
import data from './../../../data'
import { Link } from 'react-router-dom';

const Course = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

      // const posts = [
      //   {
      //     id: 1,
      //     title: 'Full Stack JavaScript',
      //     description: 'Explore the latest trends and technologies in web development.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1  // Replace with actual path
      //   },
      //   {
      //     id: 2,
      //     title: 'React JS',
      //     description: 'The world can’t live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to making bank transactions. Thanks to efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library’s fundamentals and work with a simple demo.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 3,
      //     title: 'React Native',
      //     description: 'React Native allows you to build mobile applications using React. Learn to develop high-quality mobile apps for both iOS and Android platforms with this versatile framework.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 4,
      //     title: 'React Native and Node',
      //     description: 'Combine React Native for mobile app development with Node.js for server-side scripting to create a comprehensive full-stack development experience.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1// Replace with actual path
      //   },
      //   {
      //     id: 5,
      //     title: 'Node.js',
      //     description: 'Node.js enables you to build scalable network applications with ease. Learn the essentials of this powerful server-side platform and how to use it for efficient backend development.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 6,
      //     title: 'Flutter',
      //     description: 'Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Explore its capabilities to create visually appealing apps with a smooth user experience.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 7,
      //     title: 'Python Full Stack',
      //     description: 'Master the Python programming language and its application in full-stack development. Learn how to build both front-end and back-end systems using popular Python frameworks and libraries.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 8,
      //     title: 'UI/UX Design',
      //     description: 'Explore the principles of User Interface and User Experience design. Understand how to create user-centered designs that provide engaging and intuitive interactions.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 9,
      //     title: 'Data Science and Python',
      //     description: 'Data Science with Python covers the essential skills for analyzing and interpreting complex data. Learn to leverage Python’s powerful libraries to uncover insights and make data-driven decisions.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 10,
      //     title: 'Data Engineering and Python',
      //     description: 'Data Engineering focuses on designing and managing data systems and pipelines. Learn how to use Python to build robust data architectures and ensure data flows smoothly across various systems.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 11,
      //     title: 'AI and Python',
      //     description: 'Artificial Intelligence with Python explores how to create intelligent systems using Python’s extensive libraries. Gain insights into building AI models and implementing machine learning algorithms.',
      //     backgroundImage: co1, // Replace with actual path
      //     img: co1 // Replace with actual path
      //   },
      //   {
      //     id: 12,
      //     title: 'ML and Python',
      //     description: 'Machine Learning with Python involves creating algorithms that allow computers to learn from data. Understand how to apply Python’s tools to build predictive models and solve complex problems.',
      //     backgroundImage: co1, // Replace with actual path
      //     img:co1// Replace with actual path
      //   }
      // ];
  

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className='bg-white'>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-6xl header">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-wide text-red-600 sm:text-[3em]">
                  Your learning adventure starts here
                </h1>
                <p className="mt-6 text-[1rem] leading-8 text-gray-600">
                  Our curriculum is expertly crafted by engineers to empower you with in-demand skills!
                </p>
              </div>
              <div className="img1">
                <img src={icon2} alt="" className='img1a' />
                <img src={icon1} alt="" className='img2a' />
              </div>
            </div>
            <h1 className="text-2xl font-bold  text-black sm:text-[3.13em] text-center mt-[6%]">
              Courses We Offer
            </h1>
            <CoursesComponent posts={data} />
            <h1 className="text-2xl font-bold  text-black sm:text-[3.0em] text-center mt-[10%] mb-[3%]">
              Why Join Academy?
            </h1>
            <Join />
            <div className='certificates w-[80%] mx-auto mt-12 flex flex-col md:flex-row gap-5'>
              <div className="left-part w-full md:w-[50%]  md:mt-2 flex flex-col  justify-center items-center">
                <h1 className='text-3xl md:text-3xl mb-5 font-bold text-center  lg:!text-start'>
                  Earn a completion certificate
                </h1>
                <span className='text-center'>
                  Enhance your professional profile with an online certificate received upon project submission
                </span>
                <button className=' bg-red-500 px-6 py-2 rounded-3xl mt-5 text-white items-center justify-center border-2 border-red-300 w-48'>
                  Register Now
                </button>
              </div>
              <div className="right-part1 w-full md:w-[50%] overflow-hidden">
                <img src={cer} alt="Certificate" className='w-full' />
              </div>
            </div>
            <div className='certificates w-[80%] mx-auto mt-24 flex flex-col md:flex-row gap-5 '>
              <div className="left-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
                <img src={student} alt="Student" className='transform transition-transform duration-100 ease-in-out hover:scale-100 img' />
                <div className="overlay absolute inset-0 flex justify-center items-center">
                 <Link to='/register'> <h2 className='text-white text-lg md:text-2xl font-bold'>Register for Free</h2></Link>
                </div>
              </div>
              <div className="right-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
                <img src={contact} alt="Contact" className='transform transition-transform duration-500 ease-in-out hover:scale-100 img' />
                <div className="overlay absolute inset-0 flex justify-center items-center">
                  <h2 className='text-white text-lg md:text-2xl font-bold'>Hire From Us</h2>
                </div>
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
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
