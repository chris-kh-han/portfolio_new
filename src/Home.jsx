import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioGrid from './PortfolidGrid';
import MainContent from './components/MainContent';
import { StarIcon } from '@heroicons/react/24/solid';
import avatar from '/assets/avatar.jpg';
import { Link, useLocation } from 'react-router';

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

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      // Adjust the stagger delay as needed (0.2s here)
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 500, // Higher stiffness for a snappier effect
      damping: 20, // Lower damping for more bounce
    },
  },
};

const primaryLinkVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const primaryLinkItemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 20 },
  },
};

const socialLinks = [
  {
    href: 'mailto:chris.kh.han@gmail.com',
    imgSrc:
      'https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000',
    alt: 'Email Icon',
  },
  {
    href: 'https://github.com/chris-kh-han',
    imgSrc:
      'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF',
    alt: 'GitHub Icon',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.linkedin.com/in/chris-kh-han/',
    imgSrc: 'https://img.icons8.com/color/48/000000/linkedin.png',
    alt: 'LinkedIn Icon',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const primaryLinks = [
  {
    name: 'Home',
    summary: 'Welcome to my homepage.',
    href: '/',
  },
  {
    name: 'About',
    summary: 'Learn about my journey and skills.',
    href: '/about',
  },
  {
    name: 'Project',
    summary: 'Dive into detailed project case studies.',
    href: ' work',
  },
  // {
  //   name: 'Portfolio',
  //   summary: 'Browse a showcase of my creative work.',
  // },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuOffsetTop, setMenuOffsetTop] = useState(0);

  // Measure the top offset of the Menu container (including m-8 margin)
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      setMenuOffsetTop(rect.top);
    }
  }, []);

  // Disable scroll when close screen is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center m-8'>
      {/* Menu Screen */}
      {!isOpen && (
        <div
          ref={menuRef}
          className='min-h-screen bg-gradient-to-r from-accent to-secondary-content w-full'
        >
          <div className='menu-link m-8 flex'>
            <StarIcon className='size-12 text-blue-500' />
            <button
              className='uppercase tracking-[0.25rem] text-sm align-middle hover:tracking-[0.5rem] transition-all text-center w-[120px]'
              onClick={() => setIsOpen(true)}
            >
              Menu
            </button>
          </div>
          <MainContent propsForHero={propsForHero} />
          <PortfolioGrid />
        </div>
      )}

      {/* Close Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='closeScreen'
            initial={{ y: menuOffsetTop, opacity: 0 }} // Start from the Menu container's top offset
            animate={{ y: 0, opacity: 1 }} // Animate down to y:0 (covering the screen)
            exit={{ y: menuOffsetTop, opacity: 0, transition: { duration: 0 } }}
            transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
            className='fixed inset-0 bg-gray-900 text-white z-50 m-8'
            style={{
              transformOrigin: 'bottom left',
              backfaceVisibility: 'hidden',
              overflow: 'hidden',
            }}
          >
            <div className='menu-link m-8 flex'>
              <StarIcon className='size-12 text-white' />
              <button
                className='uppercase tracking-[0.25rem] text-sm align-middle hover:tracking-[0.5rem] transition-all text-center w-[120px]'
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            <motion.div
              className={`social-links ${isOpen ? 'is-open' : ''} flex m-8`}
              variants={listVariants}
              initial='hidden'
              animate='visible'
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  className='mx-4 first:ml-32'
                  variants={itemVariants}
                >
                  <img
                    src={link.imgSrc}
                    alt={link.alt}
                    className='w-[40px] h-[40px] cursor-pointer'
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.ul
              variants={primaryLinkVariants}
              initial='hidden'
              animate='visible'
              className='m-8'
            >
              {primaryLinks.map((primary) => (
                <motion.li
                  key={primary.href}
                  variants={primaryLinkItemVariants}
                  className='my-12 flex items-end'
                >
                  <Link
                    to={primary.href}
                    onClick={() => {
                      if (location.pathname === primary.href) {
                        setIsOpen(false);
                      }
                    }}
                    className='w-[10rem]'
                  >
                    <div className='text-5xl'>{primary.name}</div>
                  </Link>
                  <div className='ml-32 align-bottom'>{primary.summary}</div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
