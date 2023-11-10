import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
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
                    <img className='w-20 mx-auto pt-4' src={Node} alt="icone HTML" />
                    <p className='my-2 font-bold'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Firebase} alt="icone HTML" />
                    <p className='my-2 font-bold'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Github} alt="icone HTML" />
                    <p className='my-2 font-bold'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={AWS} alt="icone HTML" />
                    <p className='my-2 font-bold'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Tailwind} alt="icone HTML" />
                    <p className='my-2 font-bold'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Mongo} alt="icone HTML" />
                    <p className='my-2 font-bold'>Mongo DB</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills