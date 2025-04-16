import React from 'react'
import {ArrowRight } from "lucide-react"
export default function Card(props) {
    return (
        <>
            {/* <div className='Card-Component flex border h-60 w-200 '>
            <div className="image">
                <img src="https://venturebeat.com/wp-content/uploads/2025/03/cfr0z3n_a_robot_with_headphones_emitting_visible_sound_waves_in_4f884cad-1490-4163-977a-c8fb88af3c56.png?w=1024?w=1200&strip=all" alt="" />
            </div>
            <div className="content">
                <h2>A new, enterprise-specific AI speech model is here: Jargonic from aiOla claims to best rivals at your business’s lingo</h2>
                <p>The model’s architecture integrates keyword spotting directly into the transcription process, allowing Jargonic to maintain accuracy...</p>
            </div>
        </div> */}


            {/* What GPT Did */}
            <div className="Card-Component flex flex-col md:flex-row border rounded-2xl shadow-md overflow-hidden w-full max-w-4xl mx-auto bg-black hover:shadow-xl transition-shadow duration-300 m-10">
                <div className="md:w-1/2 w-full h-70">
                    <img
                        src={props.imageURL}
                        alt="AI robot"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-4 md:w-1/2 flex flex-col justify-center gap-2">
                    <h2 className="text-xl font-semibold text-white">
                        {props.title}
                    </h2>
                    <p className="text-white text-sm">
                        {props.description}
                    </p>
                    <div className="more">
                        <h4 className='text-gray-400'>{props.author}</h4>
                        <h4 className='text-gray-400'>{props.time}</h4>

                    </div>
                    <div className="div">
                        <a className=' flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href="">Read More <ArrowRight/></a>
                    </div>
                </div>

            </div>

        </>

    )
}
