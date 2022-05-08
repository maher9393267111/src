import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {mainslider} from './maindata'
import './index.css'


const Mainslider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        
    };


    return (
        <div>
        
        <Slider style={{ with: "200px" }} {...settings}>

{/* wrapper data */}


    
   {mainslider.map((item)=>{

return (

<div     className='slider-item' key={item.id}>
    <img className='slider-image' src={item.image} alt=""/>

{/* info section inside image  */}

<div className='info-wrapper'>
    
    <div className='info-container'>
        
<div className='section-title'>
    {item.title}
</div>


<div className='section-desc'>
    
<h1>{item.desc}</h1>


</div>


<div className='section-buttons'>

<button className='sec-btn1' type="">{item.btn1}</button>

<button className='sec-btn2' type="">{item.btn2}</button>
    
</div>







    </div>



</div>





</div>


)




   })}









</Slider>








        </div>
    );
}

export default Mainslider;
