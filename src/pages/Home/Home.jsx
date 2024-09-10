import { Categories } from '../../components/Categories/Categories';
import Modal from '../../components/Modal/Modal';
import css from './Home.module.css';
import Hero from '../../components/Hero/Hero';

export const Home = () => (
  <>
    <Hero />
    <section className={css.hero}>HOME</section>
    <Modal children={<h2>Hello World</h2>} />
    <Categories />
  </>
);
