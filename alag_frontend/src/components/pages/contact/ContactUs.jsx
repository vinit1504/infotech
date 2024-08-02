/* eslint-disable no-unused-vars */
import React ,{useEffect} from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";

const ContactUs = () => {

    useEffect(() => {
    window.scrollTo(0,0)
    }, [])
    
  const [result, setResult] = React.useState("");
  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data) => {
    setResult("Sending....");
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("access_key", "3dfe3e66-5b63-4570-8030-223a1bb1f46b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", responseData);
      setResult(responseData.message);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative isolate px-6 pt-8 lg:px-8 from-purple-100 to-white">
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
      </div>
      <div className="content">
        <div className="heading ">
          <h1 className="text-4xl text-center text-red-600 font-bold tracking-wide sm:text-5xl mb-5">
            Get in touch
          </h1>
          <span className="text-center mx-auto w-[90%] flex justify-center">
            Ready to find answers? Reach out to us for expert assistance
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-b flex items-center justify-center p-6">
          <div className="p-8 rounded-lg shadow-lg max-w-4xl w-full bg-purple-50">
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h2 className="text-3xl font-bold mb-16 flex justify-center sm:justify-start">
                  Contact Us
                </h2>
                <div className="flex items-center mb-4 gap-2">
                  <MdOutlineEmail className="font-bold" />
                  <p className="text-gray-600">support@fynd.academy</p>
                </div>
                <div className="flex items-center mb-4 gap-2">
                  <BsTelephone className="font-bold" />
                  <p className="text-gray-600">+91 8160356835</p>
                </div>
                <div className="flex mb-4 gap-2">
                  <SlLocationPin className="font-bold text-2xl" />
                  <p className="text-gray-600">
                    A-101 Revti plaza, near Bhakti Circle, Nikol, Ahmedabad, 382350
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  {/* <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name *
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        {...register("first-name", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name *
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        {...register("last-name", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div> */}
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Name *
                      </label>
                      <input
                        type="text"
                        id="email"
                        {...register("email", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number *
                      </label>
                      <input
                        type="number"
                        id="phone"
                        {...register("phone", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      {...register("message", { required: true })}
                      className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    />
                  </div>
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-700 flex justify-center mx-auto text-white p-2 rounded-3xl py-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Submit
                  </button>
                  <span>{result}</span>
                </form>
              </div>
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

export default ContactUs;
