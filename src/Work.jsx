import {
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import CardList from './components/CardList';

const cardData = [
  {
    text: (
      <>
        <strong>Chatbot Development</strong>: Built an intelligent chatbot
        leveraging Google AI API. Developed the frontend using Vite and
        TypeScript, while implementing the backend with Node.js. Optimized
        real-time chat functionality and improved error handling to enhance user
        experience. Integrated natural language processing models to provide
        more fluid and human-like conversations.
      </>
    ),
    icon: <ChatBubbleLeftRightIcon className='size-48 text-[var(--line)]' />,
  },

  {
    text: (
      <>
        <strong>Airbnb Clone</strong>: Designed a full-stack application using
        Next.js 14+, TypeScript, and Supabase. Implemented user authentication
        and account management with Clerk authentication system. Utilized
        TailwindCSS and Shadcn/ui to optimize responsive design, including dark
        mode and theme management. Enhanced user experience by integrating
        search filtering, booking system, and payment functionalities.
      </>
    ),
    icon: <HomeModernIcon className='size-48 text-[var(--line)]' />,
  },

  {
    text: (
      <>
        <strong>Real Estate Platform</strong>: Built a full-stack mobile-first
        application using React Native, TypeScript, and Appwrite. Integrated
        multiple APIs to enable real estate listing searches, real-time map
        features, and favorite property lists. Applied performance optimizations
        and data caching for faster search responses while designing a UX/UI
        tailored for mobile users. Currently developing additional features with
        a focus on scalability and future deployment readiness.
      </>
    ),
    icon: <BuildingOfficeIcon className='size-48 text-[var(--line)]' />,
  },
];
const Work = () => {
  return (
    <div className='mx-20'>
      <CardList
        cardData={cardData}
        currentPage='work'
      />
    </div>
  );
};

export default Work;
