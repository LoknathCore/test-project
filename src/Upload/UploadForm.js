import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";

const UploadForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));


    const [img, setImg] = useState();



    const fileUpload = (e) => {

        const [file] = e.target.files;
        // console.log(e.target.files[0])

        setImg(URL.createObjectURL(file));
        

    }

    return (
        <section className='grid grid-cols-1 place-items-center rounded-sm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-4'>
                    {/* register your input into the hook by invoking the "register" function */}
                    {/* <input class="input input-bordered input-primary w-full max-w-4 my-2 border-dashed" {...register("example")} /> */}

                    <div class="flex py-10 items-center justify-center bg-grey-lighter">

                        <label class="relative overflow-hidden w-34 flex flex-col items-center px-4 py-6 b rounded-lg shadow-lg uppercase border border-dashed cursor-pointer ">

                            <FiUpload className='w-6 h-6 text-[#a6a7a9] group-hover:text-gray-600'></FiUpload>

                            <p className="italic pt-[20px] text-sm tracking-wider text-[#a6a7a9] ">

                                Upload</p>

                            <span class="mt-2 text-[#a6a7a9] leading-normal">Select Image</span>

                            <input type='file' class="hidden" onChange={fileUpload} />

                            <img src={img} alt="" className='absolute inset-0 object-cover w-64 h-full' />

                        </label>

                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                </div>
                <div>
                    <input class="input input-bordered input-primary w-full max-w-xs my-2" {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>

                <div>
                    <input className='btn btn-secondary inline-block mx-auto my-2' type="submit" />
                </div>
            </form>
        </section>
    );
};

export default UploadForm;