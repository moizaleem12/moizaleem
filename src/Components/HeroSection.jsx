import { useEffect, useState } from "react";
import moiz from "../assets/six.jpg";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { BsPatchCheckFill } from "react-icons/bs";
export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const email = "mianmoiz0000@gmail.com";

  useEffect(() => {
    const handleCopy = (e) => {
      if (e.ctrlKey && e.code === "KeyC") {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
        });
      }
    };

    window.addEventListener("keydown", handleCopy);
    return () => {
      window.removeEventListener("keydown", handleCopy);
    };
  }, []);

  return (
    <>
      <div className="relative flex items-end overflow-hidden ">
        {/* content */}
        <div className="flex flex-col ">
          <img
            src={moiz}
            className="border-2 border-white h-18 w-18 md:h-16 md:w-16 rounded-lg object-cover"
            alt="Moiz Aleem"
          />
          <div className="flex flex-col my-3">
            <div className="flex items-center">
              <h2 className="font-semibold text-xl md:text-3xl">MOIZ ALEEM</h2>
              <BsPatchCheckFill
                size={18}
                  className="text-blue-500 ml-2"/>
            </div>
            <p className="w-auto md:w-[50%] text-sm md:text-base ">
              I love building easy-to-use, visually appealing web apps. With a
              passion for both design and development, I turn ideas into smooth,
              working products.
            </p>
          </div>
          <div className="flex items-center cursor-pointer px-3 py-1 border rounded-full w-max">
            <Link to="https://drive.google.com/drive/folders/1AwifkJzP86QFMXXOrBbgCItFS4WmPYEt" target="_blank">Resume</Link>
            <FiDownload
              size={28}
              style={{ color: "white",backgroundColor: "black" }}
              className=" p-2 rounded-full ml-4"
            />
          </div>
        </div>

      {/* email */}
        <h1 className="hidden md:block">Press Ctrl + C to copy email</h1>

        {showPopup && (
          <div className="absolute bottom-8 right-9 bg-black text-white text-sm px-4 py-2 rounded-lg animate-fade-in">
            Email copied to clipboard!
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
}
