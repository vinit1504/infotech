/* eslint-disable no-unused-vars */
import React , {useEffect} from "react";
import Accordion from "./../../../Accordion";
import Question from "./../../Question";
import { useParams } from "react-router-dom";
import data from '../../../data';
import { IoIosArrowRoundForward } from "react-icons/io";

const Pricing = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Live Interactive Sessions",
      description:
        "Weekly live interactive sessions on Google Meet by expert trainers.",
    },
    {
      title: "Capstone Project",
      description:
        "A final project that allows students to apply their learning to solve real-world problems.",
    },
    {
      title: "Certification",
      description:
        "Post successful completion of course all learners will be awarded with Fynd Academy Certificates.",
    },
    {
      title: "Placement Assistance",
      description:
        "To help graduates find relevant job opportunities and prepare for the workforce.",
    },
    {
      title: "Mentorship & Doubt Solving Support",
      description:
        "Guidance from experienced professionals to support learning and career development.",
    },
    {
      title: "Interview Preparation & Soft Skills Training",
      description:
        "Students will be trained in interview and soft skills for success in any job.",
    },
    {
      title: "Coding Camps",
      description:
        "Interactive workshops teaching essential coding skills through practical projects and activities.",
    },
    {
      title: "Community",
      description:
        "Network with like-minded peers, platform to share knowledge and explore growth opportunities.",
    },
  ];

  // const questionsAnswers = [
  //   {
  //     question: "What is React?",
  //     answer: "React is a JavaScript library for building user interfaces.",
  //   },
  //   {
  //     question: "How does React work?",
  //     answer:
  //       "React creates a virtual DOM in memory and synchronizes it with the real DOM.",
  //   },
  //   {
  //     question: "What are components in React?",
  //     answer:
  //       "Components are independent, reusable pieces of code in a React application.",
  //   },
  //   {
  //     question: "How do you create a component in React?",
  //     answer:
  //       "A component can be created using a JavaScript function or a class.",
  //   },
  // ];
  const { title } = useParams(); // Extract the title from the URL
  const post = data.find((post) => post.title === title); // Find the post with the matching title

  if (!post) {
    return <div>Post not found</div>;
  }

  const images = post.toolsAndTechnology;
  console.log(images[0].image); // Extract the images object

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="">
        <div className="relative isolate px-6 pt-8 lg:px-8">
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
          <div className="">
            <div className="w-[90%] mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-10">
                    {post.title}
                  </h1>
                  <p className="mt-4 text-lg text-gray-700 w-[100%] sm:w-[70%] ">
                    {post.description}
                  </p>
                  <div className="mt-6 flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
                    <div>
                      <h2 className="text-xl  text-gray-800 font-bold">
                        Google Meet
                      </h2>
                      <p className="text-gray-600">Interactive live sessions</p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mt-2">
                        2 Months
                      </h2>
                      <p className="text-gray-600 ">
                        Comprehensive live training
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mt-2">
                        Placement
                      </h2>
                      <p className="text-gray-600">Support for 6 Months</p>
                    </div>
                  </div>
                </div>
                <button className="mt-10 p-5 bg-purple-700  flex items-center justify-center  text-white rounded-full w-[70%] sm:w-[20%] mx-auto">
                  <p>Register Now </p>
                  <IoIosArrowRoundForward  className="text-2xl mt-1 ml-2 "/>
                </button>
              </div>
              <div className="mt-8">
                <h2 className="text-xl sm:text-4xl font-bold text-gray-800 text-center mt-24 mb-10">
                  Tools and Softwares
                </h2>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-1 gap-y-8 imglogo w-[100%] mx-auto ">
                  {Object.entries(images).map(([key , name, image]) => (
                    <img
                      key={key}
                      src={images[key].image}
                      alt={name.name}
                      className="w-[80%] mx-auto border-2 rounded-3xl p-8"
                    />
                  ))}
                </div>
              </div>
              <Accordion data={post.sectionData}/>
            </div>
            <div className="mt-16 text-xl sm:text-4xl text-center font-bold mb-5">
              <h1>See what we offer</h1>
              <div className="flex flex-wrap justify-center gap-4 p-4 w-[100%] sm:w-[80%] mx-auto ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={` rounded-lg shadow-md py-8 px-4 max-w-sm text-start w-[100%] bg-purple-50`}
                  >
                    <h2 className="text-xl font-bold mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-sm text-gray-800 font-normal">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="question-container sm:flex w-[90%] mx-auto top-0 sm:mt-24">
              <h1 className="sticky-header w-auto text-xl md:text-5xl sm:mt-24 sm:text-3xl text-center font-bold mt-12 mb-5   leading-snug'">
                Frequently Asked Questions
              </h1>
              <Question />
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
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Pricing;
