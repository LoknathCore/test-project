import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
    const [navMobile, setNavMobile] = useState(false)
    return (
        <div className='header'>
            <div className='w-[80%] mx-auto flex justify-between relative'>
                <div className='flex gap-x-24'>
                    <a href="">
                        <h1>Logo</h1>
                    </a>
                    {/* nav for large device */}
                    <div className='lg:flex justify-center hidden '>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>

                    </div>
                </div>
                {/* nav for small device */}
                <div className={`${navMobile ? 'max-h-52' : 'max-h-0'} overflow-hidden  bg-red-400  bg-red-400 lg:hidden w-full top-12 absolute left-0 right-0 transition-all overflow-hidden rounded `}>
                    <div className='p-5'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden'>
                    <FaBars />
                </div>
            </div>


        </div>
    );
};

export default Navigation;