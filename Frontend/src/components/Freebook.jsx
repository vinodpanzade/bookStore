import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import Slider from "react-slick";
import list from '../../public/list.json'

const Freebook = () => {
    const filterData=list.filter((data)=>data.category==="Free");
    console.log(filterData);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4, // Default for large screens
      slidesToScroll: 4, // Default for large screens
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024, // For screens less than 1024px
          settings: {
            slidesToShow: 3, // Show 3 slides
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600, // For screens less than 600px
          settings: {
            slidesToShow: 2, // Show 2 slides
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480, // For screens less than 480px
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <div>
      <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        
      </div>
      <div>
      <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
          
      </div>
      </>
    </div>
  )
}

 export default Freebook



