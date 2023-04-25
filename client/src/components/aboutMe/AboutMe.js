import s from "./AboutMe.css"
import ImagenesCarrusel from "../helper/imgCarousel/ImagenesCarousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper";

const AboutMe = ()=>{
    // return(
    
    
    // TODO ESTO PUEDE IR EN IMAGENES PARA DAR MAS PROFESIONALISMO


    //     <div className="mainContainerAboutMe">

    //         <div className="titleAboutMe">
    //             <h3>FullStack Web Developer</h3>
    //             <h4 className="subtitleAboutMe">Matthew Gallar</h4>
    //         </div>
            
            
    //         <div className="descriptionAboutMe">
    //             <p>
    //                 Desarrollador web con fortaleza en Front end, apasionado con el mundo de la programación en 
    //                 búsqueda del fortalecimiento de tecnologías adquiridas y nuevos desafíos que me permitan 
    //                 perfeccionar mi carrera.

    //             </p>
    //         </div>

           

    //     </div>
    // )

    return(
        
        <div className="firstBlock" id="nosotros">
             <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={1000}
                pagination={{
                clickable: true,
                }}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                //   }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={ImagenesCarrusel[0].img1} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={ImagenesCarrusel[1].img2} alt="img2" /></SwiperSlide>
                <SwiperSlide><img src={ImagenesCarrusel[2].img3} alt="img3" /></SwiperSlide>
                <SwiperSlide><img src={ImagenesCarrusel[3].img4} alt="img4" /></SwiperSlide>
                <SwiperSlide><img src={ImagenesCarrusel[4].img5} alt="img5" /></SwiperSlide>

            </Swiper>
        

        </div>
        
)
}

export default AboutMe