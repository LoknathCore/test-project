import React, { useState } from "react";
import './BannerUp.css'
import { BsUpload } from 'react-icons/bs';


function DragDropFile() {

    const [img, setImg] = useState()

    const handleChange = function (e) {
        const [file] = e.target.files
        setImg(URL.createObjectURL(file))
        console.log(URL.createObjectURL(file))
        e.preventDefault();

    };

    return (
        <div className="">
            <div class="flex justify-center items-center w-full relative overflow-hidden text-txtSecondColor">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-60 bg-[#272727] rounded-lg border-2 border-textSecondColor border-dashed cursor-pointer">
                    <div className="absolute">
                        <div className="text-gray-300">
                            <p className="text-[3rem] ml-5 mb-3 "><BsUpload /></p>
                            <p>Upload Banner</p>
                        </div>
                        <img className="object-fit" src={img} alt="" />
                    </div>
                    <input onChange={handleChange} id="dropzone-file" type="file" class="hidden" />


                </label>
            </div>

            <button className="btn" >Add Bannner</button>

            {
                new Array(4).fill('').map(input => <input type="text" name="" value="" />)
            }

        </div>



    );
};

export default DragDropFile;