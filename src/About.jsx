import {
  UserIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import {
  UserIcon as ShadowUserIcon,
  AcademicCapIcon as ShadowAcademicCapIcon,
  CodeBracketIcon as ShadowCodeBracketIcon,
  CommandLineIcon as ShadowCommandLineIcon,
} from '@heroicons/react/24/solid';
import CardList from './components/CardList';

const cardData = [
  {
    text: (
      <>
        I grew up in <strong>South Korea</strong>, where I developed a strong
        curiosity for
        <strong> problem-solving</strong> and{' '}
        <strong>analytical thinking</strong>. After finishing high school, I
        moved to the <strong>United States</strong>, a transition that came with
        its own challenges but also opened up new opportunities for growth.
      </>
    ),
    icon: <UserIcon className='size-48 text-[var(--line)]' />,
    shadowIcon: <ShadowUserIcon />,
  },

  {
    text: (
      <>
        Wanting a <strong>stable and structured career path</strong>, I pursued
        a degree in
        <strong> Accounting</strong> at the{' '}
        <strong>
          University of Texas at Austin, McCombs School of Business
        </strong>
        . Studying accounting gave me a solid foundation in{' '}
        <strong>logic</strong> and <strong>structured problem-solving</strong>,
        but I soon realized that I was far more drawn to <strong>coding</strong>
        . Unlike accounting, where results often take time to materialize,{' '}
        <strong>programming provided immediate feedback</strong>—I could see my
        ideas take shape in real-time, which was incredibly rewarding.
      </>
    ),
    icon: <AcademicCapIcon className='size-48 text-[var(--line)]' />,
    shadowIcon: <ShadowAcademicCapIcon />,
  },

  {
    text: (
      <>
        Once I made the switch to <strong>software development</strong>, I fully
        immersed myself in learning. Over the years, I’ve worked on a range of
        projects, from <strong>AI-powered chatbots</strong> to
        <strong>full-stack applications</strong>, continuously refining my
        skills and embracing
        <strong> new technologies</strong>. My passion lies in building{' '}
        <strong>scalable, efficient systems</strong>
        that enhance <strong>user experiences</strong>.
      </>
    ),
    icon: <CodeBracketIcon className='size-48 text-[var(--line)]' />,
    shadowIcon: <ShadowCodeBracketIcon />,
  },

  {
    text: (
      <>
        I’m continuing to <strong>challenge myself</strong> by working on{' '}
        <strong>new projects</strong> and expanding my{' '}
        <strong>technical expertise</strong>. From designing{' '}
        <strong>intuitive user interfaces</strong>
        to <strong>optimizing backend performance</strong>, I enjoy finding{' '}
        <strong>creative solutions</strong>
        to <strong>complex problems</strong>. As I move forward in my career, I
        remain committed to
        <strong>continuous learning</strong> and delivering{' '}
        <strong>impactful applications</strong>.
      </>
    ),
    icon: <CommandLineIcon className='size-48 text-[var(--line)]' />,
    shadowIcon: <ShadowCommandLineIcon />,
  },
];

const About = () => {
  return (
    <div className='mx-20'>
      <CardList
        cardData={cardData}
        currentPage='about'
      />
    </div>
  );
};

export default About;
