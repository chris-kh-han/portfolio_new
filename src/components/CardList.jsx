import { useEffect, useRef, useState } from 'react';

const CardList = ({ cardData, currentPage }) => {
  return (
    <div className='space-y-12'>
      {cardData.map((card, index) => (
        <AnimatedCard
          key={index}
          text={card.text}
          icon={card.icon}
          shadowIcon={card?.shadowIcon}
          currentPage={currentPage}
          index={index}
        />
      ))}
    </div>
  );
};

const AnimatedCard = ({ text, icon, shadowIcon, currentPage, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 🔹 순차적으로 실행되도록 setTimeout 적용
            setTimeout(() => setIsVisible(true), index * 300); // 🔹 0.3초 간격으로 실행
          }
        });
      },
      { threshold: 0.5 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex text-[var(--text)] w-full items-center transition-opacity duration-700 ease-in-out transform ${
        index % 2 === 1 && currentPage === 'about' ? 'flex-row-reverse' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* 아이콘 */}
      <figure
        className={`relative transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-75 opacity-0'}`}
      >
        <div className='relative'>
          {/* 그림자 아이콘 (겹쳐진 후 이동) */}
          {currentPage === 'about' && (
            <div className='absolute left-0 top-0 w-full h-full animate-shadow-move text-[var(--fill)] opacity-80'>
              {shadowIcon}
            </div>
          )}

          {/* 실제 아이콘 */}
          <div className='relative text-[var(--line)]'>{icon}</div>
        </div>
      </figure>

      {/* 텍스트 */}
      <div
        className={`flex flex-col ${index % 2 === 1 && currentPage === 'about' ? 'mr-32' : 'ml-32'} `}
      >
        <p className='leading-7 whitespace-pre-line tracking-wider '>{text}</p>
        {/* Add Button on Work Page */}
        {currentPage === 'work' && (
          <a
            // href={card.link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 w-48 px-4 py-2 bg-[var(--line)] text-white rounded hover:bg-[#E6B800] transition-all text-center cursor-pointer active:scale-95'
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default CardList;
