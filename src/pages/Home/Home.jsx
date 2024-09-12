import { Categories } from '../../components/Categories/Categories';
import Modal from '../../components/Modal/Modal';
import SignModal from '../../components/SignModal/SignModal';
import css from './Home.module.css';

export const Home = () => (
  <>
    <section className={css.hero}>HOME</section>
    <Modal children={<SignModal />} />
    <Categories />
  </>
);
