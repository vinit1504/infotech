/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'; // Ensure you have react-icons installed

const Accordion = ({ data }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Use post.sections if available, otherwise default to an empty array
  const sectionData = data || [];
  console.log("hello", sectionData);

  return (
    <div className="w-[100%] sm:w-[50%] mx-auto mt-10 p-4 rounded-lg shadow-lg bg-purple-100 ">
      <h2 className="text-2xl font-bold text-center mb-4">What will you learn</h2>
      {sectionData.map((section) => (
        <div key={section.key} className="border rounded-lg mb-4 border-2 border-white">
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full flex justify-between items-center p-4 "
          >
            <span className="text-lg font-semibold ">{section.title}</span>
            {openSections[section.key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openSections[section.key] && (
            <div className="p-4 bg-purple-50 border-t border-1 border-white">
              <p className="text-sm text-gray-600 mb-2">{section.description}</p>
              {section.subsections.map((subsection) => (
                <div key={subsection.key} className="rounded-lg mb-2 border-2 border-white">
                  <button
                    onClick={() => toggleSection(subsection.key)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className=''>{subsection.title}</span>
                    {openSections[subsection.key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {openSections[subsection.key] && (
                    <div className="p-4 border-t border-white">
                      <p className="text-sm text-gray-600">{subsection.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
