import { useEffect, useState } from 'react';
import { http } from '../../http';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import css from './Testimonials.module.css';
import { Icon } from '../Icon/Icon';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await http.get('/reviews');
        setTestimonials(data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchTestimonials();
  }, []);

  if (!testimonials.length) return <p>Loading testimonials...</p>;

  return (
    <section className={css.testimonials}>
      <div className={css.testimonialContainer}>
        <div className={css.headingGeneral}>
          <h2 className={css.subheading}>What people say</h2>
          <h1 className={css.heading}>TESTIMONIALS</h1>
        </div>
        <Icon
          iconId="quotes"
          width={59}
          height={48}
          className={css.quotesImage}
        ></Icon>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
          }}
          className={css.swiper_custom_styles}
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
