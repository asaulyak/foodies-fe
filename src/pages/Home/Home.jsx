import Modal from '../../components/Modal/Modal';
import css from './Home.module.css';

export const Home = () => (
  <>
    <section className={css.hero}>HOME</section>
    <Modal children={<h2>Hello World</h2>} />
  </>
);
