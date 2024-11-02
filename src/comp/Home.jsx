import React from 'react'


function Home() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-around md:h-[100vh] text-[#fdf0d5]" id="home">
        <div className="al md:text-left md:w-[50%] w-[80%] md:mt-0 md:pl-10 mt-10">
        <h1 className="text-4xl md:text-5xl font-semibold uppercase">abdul wahab rehan</h1>
        <p className="mt-3 md:text-lg">Motivated self-taught learner seeking an entry-level IT position. Eager to apply front-end development skills (HTML, CSS, JavaScript, ReactJS) and grow in a dynamic, collaborative environment.</p>
        <a href="/public/resume.html" target='_blank'><button className="md:text-lg py-2 px-4 bg-[#669BBC] hover:opacity-[80%] mt-4 rounded-lg text-white">Know More</button></a>
        </div>
        <img src="https://files.oaiusercontent.com/file-pTdjvmrDztJrX7pAOhYmTEON?se=2024-11-02T15%3A52%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daae2d8e3-6cbc-4f65-b2f6-f6270160a801.webp&sig=wG6gxDuFC1IbUEto07HhdpGasmKSvz8ByD1tUTWj8Lo%3D" alt=""
         className="h-[250px] w-[350px] md:h-[350px] md:w-[400px] md:mt-0 mt-10" />
    </div>
  )
}

export default Home