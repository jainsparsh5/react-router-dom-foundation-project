import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Home() {

  const buttonVariants = {
    hover: {
      opacity: 0.75,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const popupControls = useAnimation();

  useEffect(() => {
    // Trigger the animation when the component mounts
    popupControls.start("visible");
  }, [popupControls]);

  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Empower your business with{" "}
              <span className="text-orange-700">Strategic</span> insights
            </h2>
            <span className="hidden sm:block  mt-5 text-sm">Powerful management platform designed to streamline your business operations, boost productivity, and drive success</span>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex text-white items-center justify-center px-6 py-3 font-medium bg-orange-700 rounded-lg"
            >
              <Link to="/" className="inline-flex">
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-10 sm:pt-1 pt-12 h-full">
          <motion.img
            className="w-96"
            variants={popupVariants}
            initial="hidden"
            animate={popupControls}
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <motion.img
          className="w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
