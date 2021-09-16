import React from 'react'
import MyImage from './lb.jpg'

function Hero() {
    return (
        <div className="flex py-20 px-10 items-center text-gray-400 bg-gray-900 font-serif">
            <div className="w-1/2 text-1xl md:text-2xl">
            <h1>Hi</h1>
            <h1>It's Me Lomesh</h1>
            <h1 className="mb-5">I am a Full Stack Web Developer</h1>
            <button className="p-2 bg-purple-400 text-gray-900 rounded-xl animate-pulse">Discover More</button>
            </div>
            <div className="w-1/2 ml-0 xs:ml-3">
            <img className="w-full lg:w-4/6 shadow-2xl rounded-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 " src={MyImage} alt="My Click" />
            </div>
        </div>
    )
}

export default Hero
