import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logoRD.png';
import {Link} from 'react-scroll';
import Curriculo from '../assets/Rafael.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "50px"}} />
        </div>

        {/* menu*/}
        <ul className='hidden md:flex'>
            <li className='hover:scale-105 duration-150'>
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>    
            </li>
            <li className='hover:scale-105 duration-150'>
            <Link to="sobre" smooth={true} duration={500}>
                Sobre
            </Link>
            </li>
            <li className='hover:scale-105 duration-150'>
            <Link to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li className='hover:scale-105 duration-150'>
            <Link to="trabalho" smooth={true} duration={500}>
                Projetos
            </Link>
            </li>
            <li className='hover:scale-105 duration-150'>
            <Link to="contato" smooth={true} duration={500}>
                Contato
            </Link>
            </li>
        </ul>
        

        {/* hamburguer */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="sobre" smooth={true} duration={500}>
                    Sobre
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="trabalho" smooth={true} duration={500}>
                    Projetos
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contato" smooth={true} duration={500}>
                    Contato
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/rafaeldegolin/" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Rafadegolin" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:rafaeldegolin26@hotmail.com">
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={Curriculo} download={Curriculo}>
                        Currículo <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
            
        </div>

    </div>
  )
}

export default Navbar