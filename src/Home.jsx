import PortfolioGrid from './PortfolidGrid';
import Hero from './components/Hero';

import avatar from '/assets/avatar.jpg';

const propsForHero = {
  page: 'Hello World!',
  title: (
    <span>
      Hello my name is <b>Chris</b>
    </span>
  ),
  content: `As an Accounting major and full-stack developer, I combine logic with creativity to build impactful solutions. Outside of coding, I love pizza and keeping fit.`,
  image: avatar,
};

const Home = () => {
  return (
    <div>
      <Hero propsForHero={propsForHero} />
      <PortfolioGrid />
      <small
        className='fixed bottom-[100px]  text-left text-gray-400  origin-bottom-left font-sans mb-5 tracking-[0.02em] leading-none
  opacity-0 animate-fadeIn'
      >
        <span className='inline-block mr-4 h-[1px] w-[25px] bg-gray-400'></span>
        © 2025. Made by Chris Kwanhee Han.
      </small>
    </div>
  );
};

export default Home;
