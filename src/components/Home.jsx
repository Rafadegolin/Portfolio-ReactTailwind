import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Olá, meu nome é</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rafael Degolin</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Sou um desenvolvedor Full Stack.</h2>
            <p className='text-[#8992b0] py-4 max-w-[700px]'>Sou um desenvolvedor full stack, com mais especialida em Front-end com ReactJS e design, conhecedor
                de outras tecnologias como Python, C/C++, Java, Kotlin, MySQL, Postman. Estou focado em desenvolver 
                aplicações web full-stack responsivas.</p>
            <div>
                <Link to="trabalho" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Conheça meu trabalho 
                        <span className='group-hover:rotate-90 duration-300'> 
                            <HiArrowNarrowRight className='ml-3 mr-3'/>
                        </span>
                    </button>         
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home