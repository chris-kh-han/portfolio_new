import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioGrid from './PortfolidGrid';
import MainContent from './components/MainContent';
import { StarIcon } from '@heroicons/react/24/solid';
import avatar from '/assets/avatar.jpg';
import { Link, useLocation } from 'react-router';
import Header from './components/Header';

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
    <>
      <PortfolioGrid />
    </>
  );
};

export default Home;
