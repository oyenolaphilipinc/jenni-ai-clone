import React from 'react'

function Customer() {
  return (
    // Customer part
    <div className="customer mt-16">
        {/* Creating a div for the two parts */}
        <div className="text-center">
            <p className="text-blue-600 font-bold mb-3">CUSTOMER LOVE</p>
            <h2 className="text-5xl font-bold">Join 350k empowered writers</h2>
            <p className="text-2xl mt-4 mb-8 text-gray-700">Jenni has helped write over 350 million words. From academic <br/> essays, fan fiction, to top-ranking blog posts.</p>
        </div>
        <div className="textimonials">
          <div className="border border-2 px-5 py-3 m">
            <h1>Rowen <span>@ambitiousrowen</span></h1>
            <p>I love @whoisjenniai.</p>
          </div>
        </div>
    </div>
  )
}

export default Customer