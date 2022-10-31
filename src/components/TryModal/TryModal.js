import React, { useState } from 'react';

const TryModal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div >
            <div>
                <button onClick={() => setShowModal(true)} className='btn'>Open Modal</button>
            </div>
            {showModal && (
                <>
                    <div className='absolute top-0 left-0 bg-[#252424cc] h-[100%] w-[100vw]' onClick={() => setShowModal(false)}></div>
                    <div className='modal-content w-[70%]  shadow-2xl rounded-lg mx-auto bg-white dark:bg-gray-700 relative ' >
                        <div className='p-12 text-center'>
                            <button onClick={() => setShowModal(false)} className='btn my-5'>X</button>
                            <div className='modal-body'>
                                <h1>modal header</h1>
                                <p>modal description</p>
                                <div>
                                    <form>
                                        <input placeholder='Enter name' className='shadow appearance-none border rounded w-full py-2 px-1 text-black ' type="" name="" value="" />
                                        <input placeholder='Enter Email' className='shadow appearance-none border rounded w-full py-2 px-1 text-black my-3' type="text" value="" />

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TryModal;