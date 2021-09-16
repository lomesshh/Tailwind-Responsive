import React from 'react'
import mongo from './mongo.png'
import express from './express.png'
import react from './react.png'
import node from './node.png'
import tailwind from './tailwind.svg'
import netlify from './netlify.png'
import git from './git.png'
import html from './html.png'


function Tech() {
    return (
        <div className="grid px-40 py-20 justify-center items-center">
            <div className="mb-8 text-2xl">
                <h1>Technologies I Use</h1>
            </div>
            <div className="md:flex justify-center items-center mb-6">
            <img src={mongo} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-5 rounded-full shadow-2xl animate-bounce"/>
            <img src={express} alt="tech img"className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            <img src={react} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            <img src={node} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            </div>
            <div className="md:flex justify-center items-center mb-6">
            <img src={tailwind} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce"/>
            <img src={html} alt="tech img"className="h-20 w-32 mr-4 p-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            <img src={git} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            <img src={netlify} alt="tech img" className="h-20 w-32 mr-4 mb-0 sm:mb-3 rounded-full shadow-2xl animate-bounce" />
            </div>
            <div className="">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </div>
    )
}

export default Tech
