import Pic5 from './photos/americandream.jpg';
import Pic6 from './photos/lastoneleft.jpg';
import Pic7 from './photos/pinkfriday2.jpg';
import Pic8 from './photos/destinconrad.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const NewCarousel = () => {
    const pics = [
      { title: 'American Dream', artist: '21 Savage', src: Pic5 },
      { title: 'Last One Left', artist: 'Brent Faiyaz', src: Pic6 },
      { title: 'Pink Friday 2', artist: 'Nicki Minaj', src: Pic7 },
      { title: 'Submissive 2', artist: 'Destin Conrad', src: Pic8 },
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
    
    export default NewCarousel;