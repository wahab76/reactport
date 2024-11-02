import React, {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Nav() {
    const[open, isOpen] = useState(false);
    const tg = () => {
        isOpen( !open );

    }
  return (
    <>
    <div className="nav flex items-center justify-around bg-[#669BBC] p-4 text-[#FDF0D5]">
        <div className="logo text-4xl font-semibold">a.W<i className='italic text-red-500'>R</i></div>
        <div className="nl hidden md:flex items-center gap-[50px] text-xl">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div onClick={tg} className="bt md:hidden flex">{open? <IoClose className='text-2xl cursor-pointer' /> : <FaBars className='text-2xl cursor-pointer' />}</div>

    </div>
    {open && (<div className="nl md:hidden flex flex-col items-center gap-[50px] text-xl bg-[#669BBC] text-[#FDF0D5] py-6 transition-[.3s_ease]">
            <a onClick={tg} href="#home">Home</a>
            <a onClick={tg} href="#about">About</a>
            <a onClick={tg} href="#projects">Projects</a>
            <a onClick={tg} href="#contact">Contact</a>
        </div>)}
    </>
  )
}

export default Nav;