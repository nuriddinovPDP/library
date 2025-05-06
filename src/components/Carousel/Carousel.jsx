import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import bgImage from "../../assets/1.jpg";

const Carousel = () => {
    const data = [
        { id: 1, text: "Temuriylar davri" },
        { id: 2, text: "Jadid adabiyoti" },
        { id: 3, text: "Sovet davri" },
        { id: 4, text: "Mustaqillik davri" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-[#191919] text-white w-[75%] mx-auto text-center">
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="relative h-[350px] ">
                        <div
                            className="absolute inset-0  bg-center rounded-2xl mt-10"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                            }}

                            
                        ></div>
                        <div className="absolute inset-0 bg-[#191919]/50"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h1 className="text-4xl font-bold text-[#C9AC8C]">
                                {item.text}
                            </h1>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
