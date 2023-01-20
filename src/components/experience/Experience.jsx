import React from 'react';
import logo from './logo.svg'
import './Experiences.css'

function Experience() {
  return (
    <div className="Express mt-8">
        <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">A writing experience like no other</h1>
            <p className="text-2xl text-gray-800 mb-8">Write blogs, essays, or anything else 10x faster with Jenni 🚀 </p>
            <button className="border border-2 py-2 px-8 mb-16 text-xl text-violet-600 rounded-full bg-violet-100">Watch a preview</button>
            <p className='text-green-600 mb-4'>USE CASES</p>
            <h2 className='text-5xl font-bold font-sans'>You're in control</h2>
            <p className="text-2xl text-gray-800 mt-4 mb-8">Types of content Jenni can help you with </p>
        </div>
        <div className="card flex">
            <div className="card-1 border border-2 px-4 py-4 w-80 mb-4 mr-4 ml-40 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Blog Post</h3>
                <p className="text-white ml-4">Write blogs & articles faster with the help of AI.</p>
            </div>
            <div className="card-2 border border-2 px-4 py-4 w-80 mb-4 mr-4 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Essays</h3>
                <p className="text-white ml-4">Save hours writing your essay or thesis with Jenni.</p>
            </div>
            <div className="card-3 border border-2 px-4 py-4 w-80 mb-4 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Emails</h3>
                <p className="text-white ml-4">Communicate your message with confidence and clarity..</p>
            </div>
            </div>
            <div className="flex">
            <div className="card-4 border border-2 px-4 py-4 w-80 mb-4 mr-4 ml-40 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Blog Post</h3>
                <p className="text-white ml-4">Write blogs & articles faster with the help of AI.</p>
            </div>
            <div className="card-5 border border-2 px-4 py-4 w-80 mb-4 mr-4 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Blog Post</h3>
                <p className="text-white ml-4">Write blogs & articles faster with the help of AI.</p>
            </div>
            <div className="card-6 border border-2 px-4 py-4 w-80 mb-4 shadow-lg shadow-violet-900/50 rounded-2xl">
                <img src={logo} height={30} width={30} className="ml-4"/>
                <h3 className="text-white font-bold text-xl ml-4">Blog Post</h3>
                <p className="text-white ml-4">Write blogs & articles faster with the help of AI.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience;