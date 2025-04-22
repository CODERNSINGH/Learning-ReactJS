import React from 'react';
import { ArrowRight } from "lucide-react";
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-component flex flex-col md:flex-row border rounded-2xl shadow-md overflow-hidden w-full max-w-4xl mx-auto bg-black hover:shadow-xl transition-shadow duration-300 m-10">
      <div className="md:w-1/2 w-full card-image">
        <img
          src={props.imageURL || "/api/placeholder/400/320"}
          alt={props.title || "News image"}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 md:w-1/2 flex flex-col justify-center gap-2 card-content">
        <h2 className="text-xl font-semibold text-white">
          {props.title || "News Title"}
        </h2>
        <p className="text-white text-sm">
          {props.description || "News description goes here..."}
        </p>
        <div className="card-meta">
          <h4 className='text-gray-400'>{props.author || "Author"}</h4>
          <h4 className='text-gray-400'>{props.time || "Publication Time"}</h4>
        </div>
        <div>
          <a 
            className='read-more-btn flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' 
            href={props.url || "#"}
          >
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}