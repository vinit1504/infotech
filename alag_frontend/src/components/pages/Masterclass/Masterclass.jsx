/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import img1 from "../../../assets/img/careerguidance.webp"
import img2 from "../../../assets/img/devlopmentskills.webp"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import cer from './../../../assets/img/certificat.jpg'
import sale from './../../../assets/img/sale.svg'
import community from './../../../assets/img/Community.svg'
import "./Masterclass.css"

const MasterclassName = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative">
        <div className="py-20 px-4 md:py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 md:px-16">
              <div className="flex-1">
                <div>
                  <h1 className=" text-2xl sm:text-4xl lg:text-5xl  font-bold text-red-600 mb-8">Python vs Java: Choosing The Right Path!</h1>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">In-depth Language Comparison</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Interactive Coding Sessions</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Guidance From Industry Expert</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Career Guidance</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="w-full md:w-64 mx-auto md:mx-0">
                      <div className="relative group">
                        <a href="#" className="btn-outer-new bg-red-500 text-white py-4 px-4 rounded-md w-full block text-center">
                          Register Now for Free!
                        </a>
                        <div className="glow-inner opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                        <div className="glow-border opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={img1}
                  loading="lazy"
                  alt=""
                  className="w-full h-auto scale-1-2"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <div className="py-20 px-4 md:py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 md:px-16">
              <div className="flex-1 ">
                <img
                  src={img2}
                  loading="lazy"
                  alt=""
                  className="w-full h-auto scale-1-2"
                />
              </div>
              <div className="flex-1">
                <div >
                  <h1 className="text-2xl lg:text-5xl font-bold text-red-600 mb-8 px-2 leading-3">What will you learn</h1>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Core differences between Python and Java</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Pros and cons of each language</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Best practices for coding in Python and Java</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Industry trends and job market insights</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="w-full md:w-64 mx-auto md:mx-0">
                      <div className="relative group">
                        <a href="#" className="btn-outer-new bg-red-500 text-white py-4 px-4 rounded-md w-full block text-center">
                          Register Now for Free!
                        </a>
                        <div className="glow-inner opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                        <div className="glow-border opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                      </div>
                    </div>
                  </div>
                </div>.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative">
        <div className=" px-4 md:py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 md:px-16">
              <div className="flex-1">
                <img
                  src={img2}
                  loading="lazy"
                  alt=""
                  className="w-full h-auto scale-1-2"
                />
              </div>
              <div className="flex-1">
                <div>
                  <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-8">Core differences between Python and Java</h1>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Core differences between Python and Java</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Pros and cons of each language</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Best practices for coding in Python and Java</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdOutlineArrowRightAlt className="w-6 h-6 text-red-600" />
                      <div className="text-sm">Industry trends and job market insights</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="w-full md:w-64 mx-auto md:mx-0">
                      <div className="relative group">
                        <a href="#" className="btn-outer-new bg-red-500 text-white py-4 px-4 rounded-md w-full block text-center">
                          Register Now for Free!
                        </a>
                        <div className="glow-inner opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                        <div className="glow-border opacity-0 transform group-hover:opacity-100 group-hover:translate-y-1 transition"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h2-wrapper text-center mb-8 md:mb-4">
        <div className="mb-2 mt-5 md:mb-2">
          <h2 className="heading-style-h2 text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            Why take up this masterclass?
          </h2>
        </div>
        <div className="max-w-full md:max-w-3xl mx-auto">
          <div className="text-lg md:text-base">
            In this masterclass, explore the unique features and strengths of Python and Java to determine which language best suits your career goals. Gain valuable insights and practical knowledge, whether you're a beginner or an experienced developer.
            <br />
          </div>
        </div>
      </div>
      <div className=" p-8">
        <div className="grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-purple-light rounded-3xl p-6 flex items-center justify-start">
            <div className="font-bold text-4xl text-purple-400 mr-4">1</div>
            <div className="font-custom text-custom font-semibold leading-tight">Expert Instructor</div>
          </div>
          <div className="bg-purple-light rounded-3xl p-6 flex items-center justify-start">
            <div className="font-bold text-4xl text-purple-400 mr-4">2</div>
            <div className="font-custom text-custom font-semibold leading-tight">Hands-On Learning</div>
          </div>
          <div className="bg-purple-light rounded-3xl p-6 flex items-center justify-start">
            <div className="font-bold text-4xl text-purple-400 mr-4">3</div>
            <div className="font-custom text-custom font-semibold leading-tight">Comprehensive Guidance</div>
          </div>
          <div className="bg-purple-light rounded-3xl p-6 flex items-center justify-start">
            <div className="font-bold text-4xl text-purple-400 mr-4">4</div>
            <div className="font-custom text-custom font-semibold leading-tight">Beginner Friendly</div>
          </div>
        </div>
      </div>
      <div className="flex my-10 justify-center items-center">
        <button className="bg-red-600 text-white font-semibold text-xl sm:text-2xl py-4 px-8 rounded-full hover:bg-red-700 transition duration-300 ease-in-out">
          Register Now for Free!
        </button>
      </div>
      <div className="master-class-info">
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold  pb-10'>Who is this master class for?</h1>
        <div className="info-cards">
          <div className="card">Aspiring Developers</div>
          <div className="card">Computer Science Students</div>
          <div className="card">Developers Considering A Switch</div>
          <div className="card">Career Changers</div>
          <div className="card">Tech Enthusiasts</div>
          <div className="card">Freelancers and Entrepreneurs</div>
        </div>
      </div>
      <div className="flex mt-15 sm:mt-20 sm:my-10 justify-center items-center">
        <button className="bg-purple-700 text-white font-semibold text-xl sm:text-2xl py-4 px-8 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">
          Register Now for Free!
        </button>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className='certificates w-[80%] mx-auto mt-12 flex flex-col md:flex-row gap-5'>
          <div className="left-part w-full md:w-[50%]  md:mt-2 flex flex-col  justify-center items-center">
            <h1 className='text-3xl sm:text-2xl lg:text-5xl mb-5 font-bold text-center sm:text-start '>
              Earn a completion certificate
            </h1>
            <span className='text-sm lg:text-xl text-center sm:text-start md:flex md:justify-start'>
              Enhance your professional profile with an online certificate received upon project submission
            </span>
            <button className=' bg-red-500 px-6 py-2 rounded-3xl mt-5 text-white items-center justify-center border-2 border-red-300 w-48'>
              Register Now
            </button>
          </div>
          <div className="right-part1 w-full md:w-[50%] overflow-hidden">
            <img src={cer} alt="Certificate" className='w-full rounded-2xl' />
          </div>
        </div>
      </div>
      <div className="refer-earn-community">
        <div className="card">
          <div className="re">
            <h2 className='font-bold'>Refer & Earn</h2>
            <p className='font-normal'>Invite your friends to join Fynd Academy and register for our amazing courses!</p>
          </div>
          <div className="re1">
            <img src={sale} alt="Refer & Earn" />
          </div>
        </div>
        <div className="card">
          <div className="re">
            <h2 className='font-bold'>Our Community</h2>
            <p className='font-normal'>Join our Community at Fynd Academy and start your path to growth and success today!</p>
          </div>
          <div className="re1">
            <img src={community} alt="Our Community" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MasterclassName

