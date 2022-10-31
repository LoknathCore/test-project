import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './UploadPatern.css'
import { BsUpload } from 'react-icons/bs';
// import 'antd/dist/antd.min.css'


const UploadPatern = () => {

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://www.google.com/',
        },
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };




    // const onPreview = async (file) => {
    //     let src = file.url;

    //     if (!src) {
    //         src = await new Promise((resolve) => {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(file.originFileObj);

    //             reader.onload = () => resolve(reader.result);
    //         });
    //     }

    //     const image = new Image();
    //     image.src = src;
    //     const imgWindow = window.open(src);
    // imgWindow?.document.write(image.outerHTML);
    // };
    // console

    return (

        <Upload
            style={{ backgroundColor: 'red' }}
            action="http://localhost:3001/"
            listType="picture-card"
            // fileList={fileList}
            onChange={onChange}
            beforeUpload={(file) => {
                console.log(file)
                return false
            }}

        >
            {fileList.length < 5 &&
                <div className=''>
                    <p > <BsUpload className='ml-6 my-4 text-xl' /></p>
                    <p className='text-xs'>Upload Logo</p>

                </div>}
        </Upload>

    );
};

export default UploadPatern;