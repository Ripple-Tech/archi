import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundImagesWithCollision } from "./ui/DropImage";

const Hero = () => {
  const images = [
    "arc2.jpg",
    "arc3.jpg",
    "arc4.jpg",
    "arc5.jpg",
    "arc6.jpeg",
    "arc7.jpeg",
    "arc8.jpeg",
    // Add more image paths as needed
  ];

  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* Falling Images */}
      <BackgroundImagesWithCollision images={images} />

      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid and Radial Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
    
        {/* Architectural Design Elements */}
        <div className="relative z-5  w-full h-full flex items-center justify-center">
          {/* Building-like Structures */}
          <div className="absolute flex space-x-8">
            {/* Building Block 1 */}
            <div className="w-24 h-64 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-900 opacity-80 transform -rotate-6"></div>
            {/* Building Block 2 */}
            <div className="w-32 h-80 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 opacity-70 transform rotate-6"></div>
            {/* Building Block 3 */}
            <div className="w-28 h-72 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700 opacity-90 transform -rotate-3"></div>
          </div>
        </div>
      </div>

      {/* Text and Call to Action */}
      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Architectural Plan Magic with Lumion
          </p>

          <TextGenerateEffect
           words="Crafting Innovative Spaces from Vision to Reality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl z-20"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Daniel, an Architect based in Nigeria.
          </p>

          <a href="#about">
            <MagicButton
              title="See our works"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
