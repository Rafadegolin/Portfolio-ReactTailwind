import React from 'react';
import Calculadora from '../assets/projects/calculadora.png';
import climaApp1 from '../assets/projects/climaAppV1.png';
import ClimaApp2 from '../assets/projects/climaAppV2.png';
import internetSpeedApp from '../assets/projects/internetSpeedApp.png';
import MarioGame from '../assets/projects/mariogame.png';
import JogoMemoria from '../assets/projects/jogomemoria.png';

const Trabalho = () => {
  return (
    <div name='trabalho' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projetos</p>
            <p className='py-6'>// Confira alguns projetos. Aplicações WEB possuem deploy!</p>
          </div>

          {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${climaApp1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaScript
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/AppClimaWeb/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/AppClimaWeb" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Grid card */}
            <div style={{backgroundImage: `url(${ClimaApp2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaScript
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/AppClimaWeb2/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/AppClimaWeb2" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${Calculadora})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaScript
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/Calculadora_simples/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/Calculadora_simples" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${internetSpeedApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaScript
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/InternetSpeedTest/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/InternetSpeedTest" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${JogoMemoria})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaScript
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/MemoryGame/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/MemoryGame" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${MarioGame})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center'>
                  JavaSript e CSS
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://rafadegolin.github.io/MarioGame/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/MarioGame" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                </div>
              </div>
            </div>

          </div>
          

            
          

        </div>
    </div>
  )
}

export default Trabalho