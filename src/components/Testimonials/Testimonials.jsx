import { useEffect, useState } from 'react';
import { http } from '../../http';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import css from './Testimonials.module.css';
import quotesImage from './quotes.png';

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
      <h2 className={css.subheading}>What people say</h2>
      <h1 className={css.heading}>TESTIMONIALS</h1>
      <div className={css.testimonialContainer}>
        <img src={quotesImage} alt="quotesImage" className={css.quotesImage} />
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
          }}
          style={{
            '--swiper-pagination-color': 'var(--black)',
            '--swiper-pagination-bullet-inactive-color': 'var(--grey)',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '16px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <div className={css.slide}>
                <p className={css.text}>{testimonial.testimonial}</p>
                <p className={css.author}>{testimonial.user.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
