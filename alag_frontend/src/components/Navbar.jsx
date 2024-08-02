/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Dialog, DialogPanel } from '@headlessui/react';
import logo from "../assets/img/logo4.png"
import logo1 from './../assets/img/logo bold.png'
import "./Navbar.css"

const navigation = [
  { name: 'Courses', item: 'course' },
  { name: 'Masterclass', item: 'masterclass' },
  { name: 'Hire from us', item: 'Hire' },
  { name: 'About us', item: 'Aboutus' },
  {name :'Contact Us' , item :'contact'},
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setShow("top");
    } else {
      setShow("");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${show}`}>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" to='/'><img
              alt="Your Company"
              src={logo1}
              className="h-8 sm:h-10 sm:ml-8 w-auto"
            /></Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.item}>{item.name}</Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <Link to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                src={logo1}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <ImCross aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.item}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleMobileLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleMobileLinkClick}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
