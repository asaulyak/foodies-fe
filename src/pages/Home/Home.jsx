import { Categories } from '../../components/Categories/Categories';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import Hero from '../../components/Hero/Hero';
import { Recipes } from '../../components/Recipes/Recipes.jsx';

export const Home = () => (
  <>
    <Hero />
    <section className={css.hero}>HOME</section>
    <Categories />
    <Recipes />
    <Testimonials />
  </>
);
