import Hero from './components/MainContent';

import avatar from '/assets/avatar.jpg';

const propsForHero = {
  title: 'About Me',
  content: ` I am a passionate and curious full-stack developer. I love solving
            complex problems, learning new technologies, and building
            user-friendly applications. With a strong foundation in JavaScript,
            Python, and modern frameworks, I bring ideas to life with clean and
            efficient code.`,
  image: avatar,
};

const About = () => {
  return (
    <div className='p-8'>
      {/* <Hero propsForHero={propsForHero} /> */}
      {/* <Main /> */}
      <small
        className='fixed bottom-[100px] left-[25px] text-left text-gray-400  origin-bottom-left font-sans mb-5 tracking-[0.02em] leading-none
  opacity-0 animate-fadeIn'
      >
        <span className='inline-block mr-4 h-[1px] w-[25px] bg-gray-400'></span>
        © 2025. Made by Chris Kwanhee Han.
      </small>
    </div>
  );
};

export default About;
