import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioGrid from './PortfolidGrid';
import MainContent from './components/MainContent';
import { StarIcon } from '@heroicons/react/24/solid';
import avatar from '/assets/avatar.jpg';
import { Link, useLocation } from 'react-router';
import Header from './components/Header';
import Techstack from './components/Techstack';
import CardList from './components/CardList';
import commits from '/assets/commits.png';

const cardData = [
  {
    text: (
      <div className='leading-8'>
        <p>
          <strong>Tech Stack Overview</strong>: This project incorporates a
          diverse set of modern technologies to build a seamless and efficient
          application.
        </p>
        <p>
          - <strong>React</strong>: Used for dynamic and responsive UI
          development, providing a smooth user experience.
        </p>
        <p>
          - <strong>TypeScript</strong>: Ensures type safety and better
          maintainability, reducing runtime errors.
        </p>
        <p>
          - <strong>HTML & CSS</strong>: Essential for structuring and styling
          the UI components.
        </p>
        <p>
          - <strong>Node.js</strong>: Serves as the backend runtime, handling
          server-side logic and API interactions.
        </p>
        <p>
          - <strong>SQL</strong>: Manages structured database operations for
          efficient data storage and retrieval.
        </p>
        <p>
          - <strong>Next.js</strong>: Enhances performance through server-side
          rendering and static generation.
        </p>
        <p>
          - <strong>JavaScript</strong>: Provides additional scripting
          functionality to enhance interactivity.
        </p>
        <p>
          This tech stack ensures scalability, high performance, and a smooth
          development experience while enabling efficient data processing and UI
          interactions.
        </p>
      </div>
    ),
    icon: <Techstack />,
  },
];

const Home = () => {
  return (
    <div className='mx-20'>
      <CardList
        cardData={cardData}
        currentPage='home'
      />
    </div>
  );
};

export default Home;
