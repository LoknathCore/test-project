import React, { useState } from 'react';

// import components
// import Logo from '../assets/img/logo.png';
// import Nav from './Nav';
// import NavMobile from './NavMobile';

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <header
            className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
            data-aos='fade-down'
            data-aos-delay='1200'
            data-aos-duration='1000'
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between relative'>
                    <div className='flex items-center gap-x-[120px]'>
                        {/* logo */}
                        <a href='#'>
                            <img src="" alt='LOgo' />
                        </a>

                        {/* nav / initially hidden / show on large screens  */}
                        <div className='hidden lg:flex lg:justify-center mx-auto'>
                            {/* <Nav /> */}
                            <p className='p-3'>home</p>
                            <p className='p-3'>about</p>
                            <p className='p-3'>contact</p>
                        </div>
                    </div>

                    {/* mobile nav / initially is showing / hide on large screens */}
                    <div
                        className={`${navMobile ? 'max-h-52' : 'max-h-0'
                            } lg:hidden absolute top-24 bg-red-500 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
                    >
                        {/* <NavMobile /> */}
                        <p>HOme</p>
                        <p>ABout</p>
                        <p>Contact</p>
                    </div>

                    {/* <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                        Request Demo
                        <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
                    </button> */}

                    {/* nav trigger btn / only shows on mobile screens */}
                    <div
                        onClick={() => setNavMobile(!navMobile)}
                        className='text-2xl text-primary cursor-pointer lg:hidden'
                    >
                        <FaBars />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;