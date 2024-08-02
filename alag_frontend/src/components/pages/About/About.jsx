/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'
import icon1 from './../../../assets/img/contact_icon1.svg'
import icon2 from './../../../assets/img/contact_icon2.svg'
import people from './../../../assets/img/menimg.jpg'
import bg from './../../../assets/img/bgpur.svg'
import Carousel from '../../Carousel' 
import Slider1 from './../../Slider1';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative isolate  pt-14 ">
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
            <h1 className="text-3xl font-bold  text-red-600 sm:text-[3em] tracking-wide w-[100%] sm:w-[80%] mx-auto sm:leading-[50px]">
              We empower you
              to launch your dream career
            </h1>
            <p className="mt-6 text-[1rem] leading-6 text-gray-600 sm:w-[60%] mx-auto py-10 w-[90%] flex justify-center">
              At Fynd Academy, we're your turbo boost to success. Whether you're a newbie or a pro, we've got the rocket fuel to turn you into a superstar from day one
            </p>
          </div>
          <div className="img1">
            <img src={icon2} alt="" className='img1a' />
            <img src={icon1} alt="" className='img2a' />
          </div>
          <img src={people} alt="" className='sm:w-[70%] mx-auto -z-10' />
        </div>
        {/* <div className="section bg-no-repeat bg-cover w-[100%] overflow-hidden min-h-screen -mt-[10%]" style={{ backgroundImage: `url(${bg})` }}>

        </div> */}
        <div className='flex flex-col md:flex-row w-full md:w-[80%] md:mx-auto gap-4 mt-10 justify-between'>
          <h1 className="text-2xl font-bold tracking-wider text-black sm:text-center md:text-left sm:text-[3em] mb-4 md:mb-0 sm:w-[50%] text-center mx-auto">
            Who we Are?
          </h1>
          <div className='w-full md:w-[60%] tracking-wider px-8 items-center '>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ullam ea, tempore, culpa consectetur exercitationem harum minima
            </p>
            <p className="mb-4">
              Maiores magnam laudantium, omnis suscipit nihil voluptas asperiores repellendus voluptatum autem quam reprehenderit nam pariatur minus amet veniam odio
            </p>
            <p>
              Saepe impedit repellendus consectetur pariatur necessitatibus quidem, quo nam velit voluptatum, veritatis accusamus tenetur, dicta ab suscipit?
            </p>
          </div>
        </div>

        <div className=''>
          <h1 className="text-2xl font-bold tracking-wider text-black sm:text-[2.50em] md:text-[3.13em]  text-center mt-[7%] my-[10%]">
            What makes us different?
          </h1>
          <div className='flex flex-col w-[100%] sm:w-[80%] sm:flex-row  mx-auto mt-10 gap-5 p-2 justify-between'>
            <div className="1 bg-purple-50 p-5 rounded-3xl flex w-[80%] sm:w-[30%]  gap-2 items-center mx-auto"><h1 className='text-6xl text-purple-400 font-semibold'>1</h1><h1>Access a diverse talent pool</h1>
            </div>
            <div className="1  bg-purple-50 p-5 rounded-3xl flex w-[80%] sm:w-[30%] gap-2 items-center mx-auto"><h1 className='text-6xl text-purple-400 font-semibold'>2</h1><h1>Access a diverse talent pool</h1></div>
            <div className="1  bg-purple-50 p-5 rounded-3xl flex w-[80%] sm:w-[30%] gap-2 items-center mx-auto  "><h1 className='text-6xl text-purple-400 font-semibold'>3</h1><h1>Access a diverse talent pool</h1></div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full md:w-[90%] md:mx-auto gap-4 mt-16 justify-between items-center'>
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-black sm:text-left sm:text-[2.13em] mb-5 md:mb-5 sm:w-[100%] text-center mx-auto ">
              Students spotlight
            </h1>
            <span className='w-[80%] mx-auto px-4 flex justify-center '>Celebrating the Success Stories of Our Graduates Across Leading Companies!</span><br />
          </div>
          <div className='w-full md:w-[70%] tracking-wider  items-center '>
            <Slider1 />
          </div>
        </div>
        <div className="mx-auto max-w-6xl header mt-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold  text-red-600 sm:text-[3em] tracking-wide w-[100%] sm:w-[80%] mx-auto sm:leading-[50px]">
              Kickstart your career with Fynd Academy
            </h1>
            <p className="mt-6 text-[1rem] leading-6 text-gray-600 sm:w-[60%] mx-auto py-6 px-6 ">
              Decode the fundamentals of coding, product design and other interesting fields. Work on live projects and feel the flow of real-time problem solving with Fynd Academy
            </p>
          </div>
          <div className=" flex items-center justify-center gap-x-6 py-5">
            <a
              href="#"
              className=" bg-red-600 px-3.5 py-2.5 text-sm font-semibold rounded-3xl text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </a>
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
  )
}

export default About