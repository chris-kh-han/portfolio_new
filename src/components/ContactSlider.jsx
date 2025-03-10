import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://img.icons8.com/color/48/000000/linkedin.png',
    'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className='carousel w-full h-96 overflow-hidden relative'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className='w-[100px] h-[100px] object-cover'
          />
        </div>
      ))}
      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className='btn btn-circle'
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className='btn btn-circle'
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
