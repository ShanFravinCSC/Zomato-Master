import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CarouselArrow';

//Component
import PictureCarouselCard from '../PictureCarousel';

const DiningCarousel = () => {

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    return (
        <div className="w-full">
            <Slider {...settings}>
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
            </Slider>
        </div>
    )
}

export default DiningCarousel;