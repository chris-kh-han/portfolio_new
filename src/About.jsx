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
      About
    </div>
  );
};

export default About;
