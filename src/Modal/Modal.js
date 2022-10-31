import React from 'react';
import { HiPlus } from "react-icons/hi";
import './Modal.css'

const Modal = () => {
  
    const handleChange=(e)=>{
        console.log(e.target.files[0])
    }


    return (
        <div>
            <div className='flex justify-center'>
                <div class="card w-96 bg-bgColor ">
                    <div class="card-body">
                        <div className='flex gap-5 text-6xl font-bold py-2'>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input onChange={handleChange} className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>                        <HiPlus className='bg-bgPlusColor rounded-full' />
                            <HiPlus className='bg-bgPlusColor rounded-full' />
                        </div>
                        <div className='flex gap-5 text-6xl font-bold py-2'>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>                    </div>
                        <div className='flex gap-5 text-6xl font-bold py-2'>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                            <div className='upload'>
                                <label className='image-label' for="inputTag">
                                    <HiPlus className='bg-bgPlusColor rounded-full' />
                                    <input className='image-input' id="inputTag" type="file" />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>
                        </div>

                        <div class="card-actions justify-center mt-3">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;