import { Categories } from '../../components/Categories/Categories';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import Hero from '../../components/Hero/Hero';
import { Recipes } from '../../components/Recipes/Recipes.jsx';

export const Home = () => (
  <div className={css.home_container}>
    <Hero />
    <Categories />
    <Recipes />
    {/* <Testimonials /> */}
  </div>
);
