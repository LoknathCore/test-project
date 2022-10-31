import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)




    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <nav className='flex justify-around'>
            <h1>Logo</h1>
            {(toggleMenu || screenWidth > 500) && (
                <ul className=' '>
                    <li className="items">Home</li>
                    <li className="items">Services</li>
                    <li className="items">Contact</li>

                </ul>

            )}
            {/* <button className='btn btn-red-500'>login</button> */}


            <button onClick={() => setToggleMenu(!toggleMenu)} className="btn">BTN</button>
        </nav>
    )
}