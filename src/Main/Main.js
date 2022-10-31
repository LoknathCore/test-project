import React from 'react';
import Video from '../Assets/video/file.mp4'
import './Main.css'


const Main = () => {
    return (
        <div className='main'>
            <video src={Video} autoPlay loop>


            </video>
            <div className='content'>
                <h1>this is content</h1>
                {/* <Sidebar />


                <Checkbox />

                <UserProvieder /> */}


            </div>


        </div>
    );
};

export default Main;