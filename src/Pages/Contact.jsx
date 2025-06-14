import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const media = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/moiz-aleem-701b06246/",
      username: "/moiz-aleem-701b/",
    },
    {
      name: "Behance",
      link: "https://www.behance.net/mianmoiz2",
      username: "/mianmoiz2",
    },
    {
      name: "Github",
      link: "https://github.com/moizaleem12",
      username: "/moizaleem12",
    },
    {
      name: "X",
      link: "https://x.com/MoizAleem12",
      username: "/MoizAleem12",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3cb2df7",
        "template_eopzcei",
        e.target,
        "QUs6gEeG_JQORsLqN"
      )
      .then(
        () => alert("Message Sent Successfully!"),
        () => alert("An error occurred, please try again.")
      );
  };

  return (
    <div className="flex flex-col justify-center mt-24 md:mt-36 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-8 px-8">
        {/* Desktop heading and social links */}
        <div className="col-span-1 hidden md:block">
          <h2 className="text-xl md:text-2xl font-bold">Contact</h2>
          <p className="md:text-base ">Let's Create Something Amazing Together! ✨</p>
          <div className="flex flex-col mt-8 gap-y-4">
            {media.map((el, ind) => (
              <div key={ind} className="flex justify-between items-end gap-x-2">
                <Link className="text-xl" to={el.link} target="_blank">
                  {el.name}
                </Link>
                <div className="flex items-center text-gray-800">
                  <p>{el.username}</p>
                  <FaArrowRight className="ml-4 transform -rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form section */}
        <div className="col-span-1 flex justify-end md:justify-end">
          <form onSubmit={sendEmail} className="w-full max-w-md">
            {/* Mobile heading */}
            <div className="block md:hidden mb-8">
              <h2 className="text-xl sm:text-3xl font-bold">Contact</h2>
              <p className="text-sm md:text-lg text-gray-700 mt-1">
                Let's Create Something Amazing Together! ✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input
                id="username"
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="text-base sm:text-lg p-2 border rounded-xl w-full"
                required
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="text-base sm:text-lg p-2 border rounded-xl w-full"
                required
              />
            </div>

            <textarea
              id="textarea"
              name="message"
              placeholder="Write your message..."
              className="text-base sm:text-lg p-2 mt-4 border rounded-xl w-full h-32 mb-3"
              required
            />

            <button
              type="submit"
              className="group cursor-pointer px-4 py-3 bg-black text-white border rounded-xl w-full flex items-center justify-center gap-3"
            >
              Send Your Message
              <FaArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile social links */}
      <div className="block md:hidden px-8 mt-8">
        <div className="flex flex-col gap-y-4">
          {media.map((el, ind) => (
            <div key={ind} className="flex justify-between items-end gap-x-2">
              <Link className="text-base" to={el.link} target="_blank">
                {el.name}
              </Link>
              <div className="flex items-center text-gray-800">
                <p className="text-xs">{el.username}</p>
                <FaArrowRight className="ml-4 transform -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-24 text-sm text-gray-600">© 2025 Moiz Aleem | All Rights Reserved</p>
    </div>
  );
}
