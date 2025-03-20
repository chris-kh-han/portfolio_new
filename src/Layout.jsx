import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useNavigation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import './animations.css';
import Header from './components/Header';

import { StarIcon } from '@heroicons/react/24/solid';
import FooterNote from './components/FooterNote';

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
    href: '/work',
  },
  // {
  //   name: 'Portfolio',
  //   summary: 'Browse a showcase of my creative work.',
  // },
];

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOffsetTop, setMenuOffsetTop] = useState(0);

  const menuRef = useRef(null);
  const navigation = useNavigation();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // navigation.state will be "loading", "idle", or "submitting"
    setIsLoading(navigation.state !== 'idle');
    if (location.pathname == '/') {
      document.documentElement.setAttribute('data-theme', 'light'); // 테마 적용
    } else if (location.pathname == '/about') {
      document.documentElement.setAttribute('data-theme', 'about'); // 테마 적용
    } else if (location.pathname == '/work') {
      document.documentElement.setAttribute('data-theme', 'work'); // 테마 적용
    }
  }, [navigation.state, setIsLoading, location.pathname]);

  // As a fallback, also track location changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);

  console.log(location.pathname);

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
    <div className='portfolio-div relative min-h-screen flex flex-col items-center justify-center m-4'>
      {isLoading ? (
        <>
          <span className='pagewrap loading loading-infinity w-[64px]'></span>
        </>
      ) : (
        <>
          {/* Menu Screen */}
          {!isOpen && (
            <div
              ref={menuRef}
              className='min-h-screen w-full'
            >
              {/* <div className='menu-link m-8 flex'>
                <StarIcon className='size-12 text-' />
                <button
                  className='uppercase tracking-[0.25rem] text-sm align-middle hover:tracking-[0.5rem] transition-all text-center w-[120px]'
                  onClick={() => setIsOpen(true)}
                >
                  Menu
                </button>
              </div> */}

              <Header
                setIsOpen={setIsOpen}
                currentLocation={location.pathname}
              />
              {/* <MainContent propsForHero={propsForHero} /> */}
              <main className='w-full mt-[940px] mb-48'>
                {/* {location.pathname === currentPath && <Outlet />}{' '} */}
                <Outlet />
              </main>
              {/* <Footer /> */}
              <FooterNote />
            </div>
          )}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='closeScreen'
                initial={{ y: menuOffsetTop, opacity: 0 }} // Start from the Menu container's top offset
                animate={{ y: 0, opacity: 1 }} // Animate down to y:0 (covering the screen)
                exit={{
                  y: menuOffsetTop,
                  opacity: 0,
                  transition: { duration: 0 },
                }}
                transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
                className='fixed inset-0 bg-gray-900 text-white z-50 mx-4'
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
                          setIsOpen(false);
                        }}
                        className='w-[10rem]'
                      >
                        <div className='text-5xl'>{primary.name}</div>
                      </Link>
                      <div className='ml-32 align-bottom'>
                        {primary.summary}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Layout;
