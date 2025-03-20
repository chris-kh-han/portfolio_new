import styles from '../styles/Header.module.css';
import { StarIcon } from '@heroicons/react/24/solid';

function Header({ setIsOpen, currentLocation }) {
  console.log(currentLocation);
  return (
    <div className={`${styles['header-container']} mx-12 my-8`}>
      <div className='header-menu flex mb-48'>
        <StarIcon className='size-12' />
        <button
          className='uppercase tracking-[0.25rem] text-sm align-middle hover:tracking-[0.5rem] transition-all text-center w-[120px]'
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
      </div>

      {currentLocation === '/' && (
        <>
          <div className={`${styles['header-title']} text-6xl font-bitter`}>
            Hello,
            <div className={`${styles['header-subtitle']} mt-4 font-bitter`}>
              I am Chris <span className='period'>.</span>
            </div>
          </div>
          <div
            className={`${styles['header-description']} mt-16 w-1/2 text-lg/8 font-bitter`}
          >
            I am a software developer with a diverse educational and social
            background. I am passionate about creating responsive and intuitive
            apps using recent technologies for end users.
          </div>
        </>
      )}

      {currentLocation === '/about' && (
        <>
          <div className={`${styles['header-title']} text-6xl font-bitter`}>
            <div className={`${styles['header-subtitle']} mt-4 font-bitter`}>
              About Me <span className='period'>.</span>
            </div>
          </div>
          <div
            className={`${styles['header-description']} mt-16 w-1/2 text-lg/8 font-bitter`}
          >
            Hello, World! I am an Accounting major and a full-stack developer
            who blends logic with creativity to build impactful solutions.
            Beyond coding, I enjoy pizza and staying fit.
          </div>
        </>
      )}

      {currentLocation === '/work' && (
        <>
          <div className={`${styles['header-title']} text-6xl font-bitter`}>
            <div className={`${styles['header-subtitle']} mt-4 font-bitter`}>
              About My Projects <span className='period'>.</span>
            </div>
          </div>
          <div
            className={`${styles['header-description']} mt-16 w-1/2 text-lg/8 font-bitter`}
          >
            I have built various full-stack applications focusing on AI,
            real-time interaction, and scalable architectures. My projects range
            from intelligent chatbots using Google AI API, a feature-rich Airbnb
            clone with Next.js and Supabase, to a real estate platform powered
            by React Native and Appwrite, optimizing dynamic content and
            seamless user experiences.
          </div>
        </>
      )}

      <div className={`${styles['header-bar']}`}></div>

      <span
        className={`${styles['header-scroll']} text-sm`}
        aria-hidden='true'
      >
        <span>
          <span>S</span> <span>c</span> <span>r</span> <span>o</span>{' '}
          <span>l</span> <span>l</span>
        </span>
      </span>
    </div>
  );
}
export default Header;
