/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Silder1.css"
import sohil from "../assets/img/sohil.png"
import mahek from "../assets/img/mahek.png"
import chetan from "../assets/img/chetan.png"
import krutik from "../assets/img/krutik.png"
import divyang from "../assets/img/divyang.png"
import darshak from "../assets/img/darshak.png"

const CarsComponent = () => {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const cars = [
        { id: 1, name: "Chetan Vasoya", detail: "Full Stack Devloper", image: chetan },
        { id: 2, name: "Mahek Patel", detail: "Game & Flutter Devloper", image: mahek },
        { id: 3, name: "Divyang Nagpara", detail: "ReactJS Devloper", image: divyang },
        { id: 4, name: "Sohil Radadiya", detail: "ReactJS Devloper", image: sohil },
        { id: 5, name: "Krutik Gabani", detail: "ReactNative Devloper", image: krutik },
        { id: 6, name: "Darshak Vaddoriya", detail: "MERN Stack Devloper", image: darshak }
    ];

    return (
        <div className="slider-container -mt-20 sm:mt-0">
            <Slider {...settings} className='m-10'>
                {cars.map(car => (
                    <div key={car.id} className=' m-2 p-2 item-center'>
                        <div className='slid p-2 border-2 rounded-3xl h-52 w-[90%]'>
                            <div className="w-full flex justify-center mt-3">
                            <img src={car.image} alt={car.name} className="car-image mb-2 w-20 rounded-full h-20" />
                            </div>
                            <div className="w-full flex justify-center mt-3">
                            <h3 className='text-sm'>{car.name}</h3>
                            </div>
                            {/* <p>{car.detail}</p> */}
                            <div className="w-full flex justify-center mt-1 ">
                            <h3 className='text-sm details'>{car.detail}</h3>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}

export default CarsComponent;
