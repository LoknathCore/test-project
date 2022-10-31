import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";

const Up = () => {
    const [img, setImg] = useState();

    const fileUpload = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }

    return (
        // <div className="flex justify-center mt-8">
        //     <div className="m-4">
        //         <div className="flex items-center justify-center">
        //             <label className="relative flex flex-col w-32 h-32 border-2 border-dashed text-[#a6a7a9] overflow-hidden">
        //                 <div className="flex flex-col items-center justify-center pt-7">
        //                     <FiUpload className='w-6 h-6 text-[#a6a7a9] group-hover:text-gray-600'></FiUpload>
        //                     <p className="italic pt-[20px] text-sm tracking-wider text-[#a6a7a9] ">
        //                         Upload</p>
        //                 </div>
        //                 <input type="file" className="opacity-0" onChange={fileUpload} />
        //                 <img src={img} alt="" className='absolute inset-0 object-cover overflow-hidden' />
        //             </label>

        //         </div>
        //     </div>
        // </div>


        <div class="flex py-10 items-center justify-center bg-grey-lighter">
            <label class="relative overflow-hidden w-34 flex flex-col 
                items-center px-4 py-6 b
                rounded-lg shadow-lg uppercase 
                border border-dashed cursor-pointer ">

                <FiUpload className='w-6 h-6 text-[#a6a7a9] group-hover:text-gray-600'></FiUpload>
                <p className="italic pt-[20px] text-sm tracking-wider text-[#a6a7a9] ">
                    Upload</p>
                <span class="mt-2 text-[#a6a7a9] leading-normal">Select Image</span>
                <input type='file' class="hidden" onChange={fileUpload} />
                <img src={img} alt="" className='absolute inset-0 object-cover w-64 h-full' />
            </label>
        </div>

    );
};

export default Up;