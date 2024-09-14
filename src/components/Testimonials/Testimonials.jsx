import { useEffect, useState } from 'react';
import { http } from '../../http';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import css from './Testimonials.module.css';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await http.get('/reviews');
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  if (!testimonials.length) return <p>Loading testimonials...</p>;

  return (
    <section className={css.testimonials}>
      <h2 className={css.subheading}>What People Say</h2>
      <h1 className={css.heading}>Testimonials</h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <div className={css.slide}>
              <p className={css.text}>{testimonial.testimonial}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
