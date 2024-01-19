
import Pic1 from './photos/never-enough.jpeg';
import Pic2 from './photos/over-it-album.jpg';
import Pic3 from './photos/destinys-child.jpg';
import Pic4 from './photos/wasteland.jpeg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MusicCarousel = () => {
    const pics = [
      { title: 'Never Enough', artist: 'Daniel Ceasar', src: Pic1 },
      { title: 'Over It', artist: 'Summer Walker', src: Pic2 },
      { title: 'Renaissance', artist: 'Beyonce', src: Pic3 },
      { title: 'Wasteland', artist: 'Brent Faiyaz', src: Pic4 },
    ];
  
    return (
        <div className="music-carousel-container"> {/* Container for the entire MusicCarousel component */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {pics.map((pic, index) => (
              <SwiperSlide key={index}>
                <img src={pic.src} alt={pic.title} />
                <div className="carousel-title">{pic.title}</div>
                <div className="carousel-artist">{pic.artist}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    export default MusicCarousel;