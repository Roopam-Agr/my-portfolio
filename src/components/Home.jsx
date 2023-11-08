import React from "react"
import heroImage from "../assets/heroImage.jpg"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full items-center md:items-start">
          <h2 className="text-2xl md:text-6xl font-bold text-white text-center md:text-start">
            I'm A Frontend Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-start">
            I'm a Web Developer who specializes in creating and designing
            outstanding digital experiences. My commitment to excellence and an
            insatiable thirst for improvement drive my work. Discover more about
            me below.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group hidden md: text-white w-fit px-5 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
