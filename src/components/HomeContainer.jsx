import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 md:-mt-46 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className=" flex items-center gap-2 justify-center bg-orange-100 px-4 py-1  rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full bg-white  overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain "
              alt="bike_image"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:w-[80%] md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
          aperiam ipsam!a Nihil alias similique qui laudantium quibusdam
          explicabo officia aperiam odio, vel iusto eligendi ut tempora maiores
          asperiores facere?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2  flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto w-full h-auto  lg:w-460 lg:h-auto mt-10"
          alt="hero-bg"
        />

        <div className="w-full h-full  absolute top-0 left-10 flex items-center justify-center px-48 py-4 gap-4 flex-wrap drop-shadow-lg ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190  p-3  bg-cardOverlay backdrop-blur-l rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="ice-cream"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-3">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-md text-lighttextGray font-semibold my-1 lg:my-4">
                  {n.decp}{" "}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600 ">$ </span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
