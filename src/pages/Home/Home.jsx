import { Categories } from '../../components/Categories/Categories';
import Modal from '../../components/Modal/Modal';
import SignModal from '../../components/SignModal/SignModal';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import Hero from '../../components/Hero/Hero';

export const Home = () => (
  <>
    <Hero />
    <section className={css.hero}>HOME</section>
    <Modal children={<SignModal />} />
    <Categories />
  </>
);
