import { Categories } from '../../components/Categories/Categories.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';

export const Home = () => (
  <>
    <section className={css.hero}>HOME</section>
    <Testimonials />
  </>
);
