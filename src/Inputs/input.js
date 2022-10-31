
import './input.css'
// const emptyCall = () => { }


export const Input = ({ name, register, required, style, className, defaultValue }) => (
    <>
        <label>{name}</label>
        <input
            {...register(name)}
            className={className}
            style={style}
            defaultValue={defaultValue}
        />
    </>
);


// export const TextArea = ({ customStyle }) => {

//     return (
//         <div>
//             <textarea
//                 style={{ height: '60px', ...customStyle }}
//                 rows="5"
//                 cols="10"
//                 placeholder="Detail"
//                 className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
//             ></textarea>
//         </div>
//     )
// }



// export const SelectInput = () => {
//     return (
//         <div class="flex justify-center">
//             <div className="mb-3 md:w-[25rem] xl:w-[45rem]">
//                 <select className="select 
//                 appearance-none
//             block
//             w-full
//             px-3
//             py-3
//             text-base
//             font-normal
//             text-gray-400
//             bg-[#272727] 
//             border border-solid border-gray-600
//             rounded
//             m-0
//             focus:text-gray-400 focus:bg-[#272727] focus:border-blue-600 focus:outline-none" aria-label="Default select example">
//                     <option selected>NFT</option>
//                     <option value="1">NFT Bundle</option>
//                     <option value="2">Services</option>
//                     <option value="3">Custom Escrow Agreement</option>
//                 </select>
//             </div>
//         </div>
//     )
// }