import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png'
import C from '../assets/C.png'
import Cplus from '../assets/C++.png'
import Java from '../assets/java.png'
import Kotlin from '../assets/kotlin2.png'
import Docker from '../assets/docker.png'
import Git from '../assets/git.png'
import MySQL from '../assets/mysql.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen sm:h-screen bg-[#0a192f] text-gray-300 pt-[100px] '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// Essas são as tecnologias que tenho utilizado</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={HTML} alt="icone HTML" />
                    <p className='my-2 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={CSS} alt="icone HTML" />
                    <p className='my-2 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={JavaScript} alt="icone HTML" />
                    <p className='my-2 font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={ReactImg} alt="icone HTML" />
                    <p className='my-2 font-bold'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Tailwind} alt="icone HTML" />
                    <p className='my-2 font-bold'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Java} alt="icone HTML" />
                    <p className='my-2 font-bold'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Kotlin} alt="icone HTML" />
                    <p className='my-2 font-bold'>Kotlin</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Firebase} alt="icone HTML" />
                    <p className='my-2 font-bold'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-6 pb-4' src={MySQL} alt="icone HTML" />
                    <p className='my-2 font-bold'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Github} alt="icone HTML" />
                    <p className='my-2 font-bold'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-10 pb-6' src={Git} alt="icone HTML" />
                    <p className='my-2 font-bold'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-5 scale-120 pb-2' src={C} alt="icone HTML" />
                    <p className='my-2 font-bold'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4 scale-90' src={Cplus} alt="icone HTML" />
                    <p className='my-2 font-bold'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Python} alt="icone HTML" />
                    <p className='my-2 font-bold'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Docker} alt="icone HTML" />
                    <p className='my-2 font-bold'>Docker</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills