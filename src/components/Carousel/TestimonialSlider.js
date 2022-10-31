import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './TestimonialSlider.css';

// import required modules
import { Pagination } from 'swiper';

// import testimonials data
// import { testimonialsData } from '../data';
const testimonialsData = [
    {
        name: 'John Fang',
        web: 'wordfaang.com',
        message:
            'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        delay: '300',
    },
    {
        name: 'Jane Doe',
        web: 'janedoee.com',
        message:
            'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        delay: '600',
    },
    {
        name: 'Jim Ferry',
        web: 'jimjimf.com',
        message:
            'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        delay: '900',
    },
];

// import swiper react components


const TestimonialSlider = () => {
    return (
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
        >
            {testimonialsData.map((slide, index) => {
                // destructure slide
                const { image, message, name, web, delay } = slide;
                return (
                    // slide
                    <SwiperSlide
                        key={index}
                        className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
                    >
                        {/* avatar image */}
                        <img src={image} alt='' />
                        {/* text */}
                        <div>
                            <div className='text-lg text-primary font-bold'>{name}</div>
                            <div className='mb-4 font-semibold text-accent-primary'>
                                {web}
                            </div>
                            <p className='max-w-[340px]'>{message}</p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TestimonialSlider;