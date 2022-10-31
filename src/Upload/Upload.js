// import React from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';




const UploadImage = () => {




    return (
        <div className='mt-32'>
            <label className='box-border h-32 w-32 p-16  mx-auto border border-1 border-dashed border-black cursor-pointer' for="my-modal-4" >+ Upload</label>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer ">
                <label class="modal-box relative" for="">
                   <Modal />
                </label>
            </label>
        </div >
    );
};

export default UploadImage;