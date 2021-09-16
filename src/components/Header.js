import React from 'react'
function Header() {
    return (
        <div className="flex justify-between h-16 bg-gray-800 text-gray-400 items-center">
            <div className="ml-6">
            <h1 className="animate-pulse text-2xl">LB's Portfolio</h1>
            </div>
            <div className="flex mr-6">
            <h1 className="mr-6">Work</h1>
            <h1>Contact</h1>
            </div>
        </div>
    )
}

export default Header
