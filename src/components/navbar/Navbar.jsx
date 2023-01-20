import React from 'react'
import argon from '../../assets/argon.png'

function Navbar() {
  return (
    <div className="flex justify-between bg-white mt-2 border-b border-gray-200 w-full">
        <div>
          <a href="/">
            <img src={argon} height={150} width={150} className="ml-20"/>
          </a>
        </div>
        <div className="flex mt-2">
          <li className="list-none mr-8 hover:text-violet-600"><a href="/pricing">Pricing</a></li>
          <li className="list-none mr-8 hover:text-violet-600"><a href="/about">About</a></li>
          <li className="list-none hover:text-violet-600"><a href="/blog">Blog</a></li>
        </div>
        <div className="mr-40 mt-2">
          <a href="/login" className="mr-4 hover:text-violet-600">Log In</a>
          <a href="/signup" className="border border-2 px-2 py-2 bg-violet-900 shadow-lg shadow-violet-900/50 text-white rounded-lg hover:bg-violet-800">Sign up for free</a>
        </div>
    </div>
  )
}

export default Navbar
