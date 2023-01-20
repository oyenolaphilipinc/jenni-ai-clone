import React from 'react'

function Services() {
  return (
    <div className="mt-16">
        <div className="text-center">
            <p className="text-red-700 mb-4">POWERFUL FEATURES</p>
            <h2 className="text-4xl font-bold mb-4">Write, cite, and edit</h2>
            <p className="text-gray-700 text-2xl mb-16">Features built to enhance your writing capabilities</p>
        </div>
        {/* First Card */}
        <div className="card mb-4 flex">
            <div className="ml-40 mr-4 border border-2 w-2/5 py-8 rounded-xl bg-white hover:bg-white">
                <img src="https://framerusercontent.com/images/gn9drxzslUX5isKqPdDaX3QlCDc.png" className="mt-24" />
                <h2 className="text-3xl ml-16 font-bold">AI autocomplete</h2>
                <p className="text-gray-700 text-lg ml-16">Jenni's autocomplete feature will write <br/> alongside you to beat writer's block.</p>
            </div>
            <div className="border border-2 w-2/5 py-8 rounded-xl bg-white hover:bg-white">
                <img src="https://framerusercontent.com/images/yl27S4qljMzlDpMmGbHLMURqFA.svg" className="mt-24 mb-8" />
                <h2 className="text-3xl ml-16 font-bold">Plagiarism-free</h2>
                <p className="text-gray-700 text-lg ml-16">Jenni outputs 99% plagiarism-free content.<br/> Plagiarism-checker built-in.</p>
            </div>
        </div>
        {/* Second Card */}
        <div className="card-up mb-4 flex">
            <div className="ml-40 mr-4 border border-2 w-2/5 py-8 rounded-xl bg-white hover:bg-white">
                <img src="https://framerusercontent.com/images/gn9drxzslUX5isKqPdDaX3QlCDc.png" className="mt-24" />
                <h2 className="text-3xl ml-16 font-bold">AI autocomplete</h2>
                <p className="text-gray-700 text-lg ml-16">Jenni's autocomplete feature will write <br/> alongside you to beat writer's block.</p>
            </div>
            <div className="border border-2 w-2/5 py-8 rounded-xl bg-white hover:bg-white">
                <img src="https://framerusercontent.com/images/yl27S4qljMzlDpMmGbHLMURqFA.svg" className="mt-24 mb-8" />
                <h2 className="text-3xl ml-16 font-bold">Plagiarism-free</h2>
                <p className="text-gray-700 text-lg ml-16">Jenni outputs 99% plagiarism-free content.<br/> Plagiarism-checker built-in.</p>
            </div>
        </div>
    </div>
  )
}

export default Services