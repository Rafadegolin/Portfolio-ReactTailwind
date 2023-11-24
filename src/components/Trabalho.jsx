import React from 'react';
import ClimaApp2 from '../assets/projects/climaAppV2.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import PortfolioImg from '../assets/projects/portfolio.png'
import QRCode from '../assets/projects/qrcode.png'
import Seletor from '../assets/projects/selecionador.png'
import Encurtador from '../assets/projects/encurtador.png'
import Java from '../assets/java.png'
import Kotlin from '../assets/kotlin2.png'
import Firebase from '../assets/firebase.png';
import Overhealth from '../assets/projects/overhealth.png';

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
            <div style={{backgroundImage: `url(${PortfolioImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  ESTE PORTFÓLIO
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/Portfolio-ReactTailwind/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/Portfolio-ReactTailwind" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                  <img className='w-10 mx-auto hover:scale-125 duration-200' src={ReactImg} alt="icone ReactJS"/>
                  <img className='w-10 mx-auto hover:scale-125 duration-200' src={Tailwind} alt="icone Tailwind"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${Overhealth})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-1xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  Android app "Overhealth"
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/Portfolio-ReactTailwind/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/Portfolio-ReactTailwind" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                  <img className='w-10 mx-auto hover:scale-125 duration-200' src={Java} alt="icone Java"/>
                  <img className='w-10 mx-auto hover:scale-125 duration-200' src={Kotlin} alt="icone Kotlin"/>
                  <img className='w-10 mx-auto hover:scale-125 duration-200' src={Firebase} alt="icone Firebase"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${Encurtador})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  Encurtador de URL
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/Encurtador-URL/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/Encurtador-URL" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={HTML} alt="icone HTML"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={CSS} alt="icone CSS"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={JavaScript} alt="icone JavaScript"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${QRCode})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  Gerador de QR Code
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/gerador-qr-code/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/gerador-qr-code" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={HTML} alt="icone HTML"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={CSS} alt="icone CSS"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={JavaScript} alt="icone JavaScript"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${Seletor})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  Seletor de cor
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/Seletor-cor/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/Seletor-cor" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={HTML} alt="icone HTML"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={CSS} alt="icone CSS"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={JavaScript} alt="icone JavaScript"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid card */}
            <div style={{backgroundImage: `url(${ClimaApp2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 duration-200'>
                <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center text-transform: uppercase'>
                  App clima - 2.0
                </span>
                <div className='pt-2 text-center'>
                  <a href="https://rafadegolin.github.io/AppClimaWeb2/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Deploy</button>
                  </a>
                  <a href="https://github.com/Rafadegolin/AppClimaWeb2" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-150'>Repositório</button>
                  </a>
                  {/* Icons */}
                  <div className='flex felx-row justify-center items-center pt-3'>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={HTML} alt="icone HTML"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={CSS} alt="icone CSS"/>
                    <img className='w-10 mx-auto hover:scale-125 duration-200' src={JavaScript} alt="icone JavaScript"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Trabalho