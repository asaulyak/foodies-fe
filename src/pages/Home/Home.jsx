import { Categories } from '../../components/Categories/Categories.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import Hero from '../../components/Hero/Hero';

export const Home = () => (
  <>
    <Hero />
    <section className={css.hero}>HOME</section>
    <div className={css.homeBody}>
      <Categories />
    </div>
    <Testimonials />
  </>
);
