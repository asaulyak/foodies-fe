import { Categories } from '../../components/Categories/Categories';
import css from './Home.module.css';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import Hero from '../../components/Hero/Hero';
import { Recipes } from '../../components/Recipes/Recipes.jsx';
import { Outlet } from 'react-router-dom';

export const Home = () => (
  <div className={css.home_container}>
    <Hero />
    {/* <Categories /> */}
    <div>
      <Outlet />
    </div>
    {/* <Recipes /> */}
    <Testimonials />
  </div>
);
