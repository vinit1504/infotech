/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    experience: "",
    course: "",
    find: "",
  });

  const navigation = useNavigate("");
  const [states, setStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [finds, setFinds] = useState([]);
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("http://localhost:3000/state/state");
        if (response.data && Array.isArray(response.data.data)) {
          setStates(response.data.data);
        } else {
          console.error("Invalid states data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/course/course");
        if (response.data && Array.isArray(response.data.data)) {
          setCourses(response.data.data);
        } else {
          console.error("Invalid courses data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchFinds = async () => {
      try {
        const response = await axios.get("http://localhost:3000/find/find");
        if (response.data && Array.isArray(response.data.data)) {
          setFinds(response.data.data);
        } else {
          console.error("Invalid finds data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching finds:", error);
      }
    };

    fetchStates();
    fetchCourses();
    fetchFinds();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Please complete the captcha");
      return;
    }
    try {
      await axios.post("http://localhost:3000/user/user", {
        ...formData,
        "h-captcha-response": captchaToken,
      });
      toast.success("Registration successful!");
      setTimeout(() => {
        navigation('/')
      }, 3000 );
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Registration failed. Please try again.");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative isolate pt-14">
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
            <h1 className="text-3xl font-bold text-red-600 sm:text-[3em] tracking-wide w-[100%] sm:w-[80%] mx-auto sm:leading-[50px]">
              Register now
            </h1>
            <p className="text-[1rem] leading-6 text-gray-600 sm:w-[60%] mx-auto py-5 w-[90%] flex justify-center">
              Join us and embark on a journey of discovery and growth today
            </p>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-10 bg-purple-light shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State:
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select State</option>
                {states.length > 0 ? (
                  states.map((stateItem) => (
                    <option key={stateItem.id} value={stateItem.id}>
                      {stateItem.name}
                    </option>
                  ))
                ) : (
                  <option value="">Loading states...</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience:
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course:
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Course</option>
                {courses.length > 0 ? (
                  courses.map((courseItem) => (
                    <option key={courseItem.id} value={courseItem.id}>
                      {courseItem.name}
                    </option>
                  ))
                ) : (
                  <option value="">Loading courses...</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How did you find us?
              </label>
              <select
                name="find"
                value={formData.find}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select Option</option>
                {finds.length > 0 ? (
                  finds.map((findItem) => (
                    <option key={findItem.id} value={findItem.id}>
                      {findItem.name}
                    </option>
                  ))
                ) : (
                  <option value="">Loading options...</option>
                )}
              </select>
            </div>
            <div>
              <HCaptcha
                sitekey="320aa60a-3aee-447a-8bfa-f64ca02479f2"
                onVerify={handleCaptchaChange}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
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
    </div>
  );
};

export default Register;
