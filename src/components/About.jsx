import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-80 md:p-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          <strong>Roopam Agrawal</strong> , a final-year student, welcomes you
          to my world of web development and software engineering. I have a
          profound love for crafting digital experiences that seamlessly blend
          form and function. As a highly motivated B.Tech student, I bring a
          robust foundation in web development, bolstered by a track record of
          successfully completed projects and proficiency in data structures and
          algorithms.
        </p>

        <br />

        <p className="text-xl">
          I am actively seeking to leverage my technical expertise and academic
          accomplishments to make a meaningful contribution as a valuable asset
          in the field of software development. As for my soft skills, patience,
          diligence, and adaptability are the cornerstones of my approach. I
          believe that crafting remarkable web experiences demands not only
          technical expertise but also a keen understanding of user needs and a
          relentless pursuit of excellence.
        </p>
        <br />

        <p className="text-4xl font-signature tracking-wider pt-2">
          - "Code your dreams."
        </p>
      </div>
    </div>
  )
}

export default About
