import React from 'react';
import './index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState,useEffect } from 'react';
import { data } from './data';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const TopCategories = () => {

    const [ismobile, setIsMobile] = useState(false);
const [islaptop, setIsLaptop] = useState(false);



// resize method when screen is resized 

    useEffect(() => {

        if (window.innerWidth < 868) {

            setIsMobile(true);
            setIsLaptop(false);

        } else {

            setIsMobile(false);
            setIsLaptop(true);

        }

        if (window.innerWidth > 800) {

            setIsLaptop(true);
            setIsMobile(false);

        } else {

            setIsLaptop(false);
            setIsMobile(true);

        }

        window.addEventListener(
            "resize",
            () => {
              if (window.innerWidth < 800) {
                setIsMobile(true);
                console.log("resize---> mobile true");
              } else {
                setIsMobile(false);
                console.log("resize---> mobile false");
              }
            },
            false
          );


      
    }, [islaptop,ismobile]);



    return (
        <div className='wrapper'>

<div className='cat-title'>
    <h1>
    TopCategories
    </h1>

</div>


 {/* -------- slider ----- */}

<div className='swiper-container'>
    

 <Swiper
        slidesPerView={ismobile ? 3 : 6}  // show how many slides in one view
        spaceBetween={20}
        // slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={false}  //if true well show empty slides spcace when clicke arrows
        pagination={{
           clickable: true,
        }}
         navigation={ismobile ? true : false}  // -->    when categories  length is 6 and show in fullscreen 6 hide arrows {navigation hide}
      
         modules={[Navigation  ]}   // write pagination to show  circle dots bottom in slider
        className="mySwiper"
      >

        {data.map((item, index) => {


            return (
                // ---- iteme ----

                <SwiperSlide key={index}>

                    <div className='cat-item'   style={{width:'200px',height:'300px'}}>

<div className='item-containder'>
    <div className='image-container'>
        
   
    <img className='item-image' src={item.image} alt=""/>
    </div>
    <div className='item-name'>
        {item.name}
    </div>
    <div className='item-productsnumber'>
        {item.productnumber} products
    </div>



</div>


                        </div>

                </SwiperSlide>

            )

        })}

    
        
      </Swiper>


      </div>
      {/* -------slider end --------- */}





            
        </div>
    );
}

export default TopCategories;
