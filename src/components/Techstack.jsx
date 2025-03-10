const Techstack = () => {
  return (
    <div className='relative mx-auto h-[350px] w-[350px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl'>
      <div className='absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <span className='text-xl font-bold text-blue-500'>Chris</span>
      </div>

      {/* React */}
      <div className='absolute left-1/2 top-[10%] flex h-20 w-20 -translate-x-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/react-native.png'
          alt='React'
        />
      </div>

      {/* TypeScript */}
      <div className='absolute left-[90%] top-[30%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/typescript.png'
          alt='TypeScript'
        />
      </div>

      {/* HTML */}
      <div className='absolute left-[90%] top-[70%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/html-5--v1.png'
          alt='HTML'
        />
      </div>

      {/* CSS */}
      <div className='absolute left-1/2 top-[90%] flex h-20 w-20 -translate-x-1/2 -translate-y-full transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/css3.png'
          alt='CSS'
        />
      </div>

      {/* Node.js */}
      <div className='absolute left-[10%] top-[70%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/nodejs.png'
          alt='Node.js'
        />
      </div>

      {/* SQL */}
      <div className='absolute left-[10%] top-[30%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/sql.png'
          alt='SQL'
        />
      </div>

      {/* Next.js */}
      <div className='absolute left-[75%] top-[50%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000'
          alt='Next.js'
        />
      </div>

      {/* JavaScript */}
      <div className='absolute left-[25%] top-[50%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110'>
        <img
          src='https://img.icons8.com/color/48/000000/javascript.png'
          alt='JavaScript'
        />
      </div>
    </div>
  );
};

export default Techstack;
