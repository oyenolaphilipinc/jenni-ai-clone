import React from 'react'
import './writing.css'

function Writing() {
  return (
    <div className="time mt-16 mb-8 flex flex-col items-center">
        <div className="mt-16">
            <div className="text mb-4">
              <p className="text-yellow-600 text-center">AI ASSISTANT</p>
              <h2 className="text-5xl text-white font-bold mb-4 text-center">Never write alone</h2>
              <p className="text-xl text-white text-gray-600 text-center">Get suggestions whenever you are stuck or expand your<br/> notes into full paragraphs 😎</p>
            </div>
            <div className="mb-10 mt-10 text-center">
              <a href="/signup" className="border border-2 px-10 py-4 border-violet-900 font-bold text-white bg-violet-900 rounded-2xl">Sign up for free</a>
            </div>
            <div className="mb-16">
              <img src="https://framerusercontent.com/images/GFILftnnn0BCKnUBVR04EYM8c.jpg" height={1000} width={1150} className="mx-auto mb-8 rounded-3xl" />
            </div>
        </div>
    </div>
  )
}

export default Writing