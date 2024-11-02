import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaJava, FaMicrosoft } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center md:h-[100vh] mt-[100px] md:mt-0" id="about">
        <div className="al w-[70%] md:w-[50%] text-[#FDF0D5]">
            <h1 className="text-3xl md:text-5xl font-medium">About Me</h1>
            <p className="md:text-lg mt-3">Motivated self-taught learner seeking an entry-level IT position where I can apply my front-end development skills in HTML, CSS, JavaScript, and ReactJS. Eager to contribute to a dynamic team and gain valuable experience in a collaborative, innovative environment that fosters growth and professional development.</p>
            <a href="/public/whbres.pdf" download><button className="md:text-lg mt-4 bg-[#669BBC] rounded-lg px-4 py-2 text-white hover:opacity-[70%]">Resume</button></a>

        </div>
        <div className="ar w-[50%] md:w-[20%] p-10 bg-[#C1121F] rounded-xl mt-10 md:mt-0">
            <h1 className="text-3xl md:text-3xl font-medium text-gray-300">My Skills</h1>
            <ul className='flex flex-col gap-2 mt-4 text-white'>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaHtml5 className='m-1' />HTML</a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaCss3 className='m-1' />CSS</a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaJs className='m-1' />Javascript</a>
            <a href="https://www.figma.com/" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaFigma className='m-1' />Figma</a>
            <a href="https://tailwindcss.com/" target='_blank' className="text-xl md:text-2xl flex gap-2"><RiTailwindCssFill className='m-1' />Tailwind CSS</a>
            <a href="https://reactjs.org/" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaReact className='m-1' />React</a>
            <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaJava className='m-1' />Java</a>
            <a href="https://www.microsoft.com/en-us/microsoft-365" target='_blank' className="text-xl md:text-2xl flex gap-2"><FaMicrosoft className='m-1' />MS Office</a>
            </ul>
        </div>
    </div>
  )
}

export default About