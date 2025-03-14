const MainContent = ({ propsForHero }) => {
  const { title, content, image } = propsForHero;
  return (
    <div className=''>
      <div className='flex-col lg:flex-row-reverse p-8'>
        <img
          src={image}
          className='max-w-sm rounded-lg shadow-2xl bg-base-200 border-8 border-transparent animate-gradient-border'
        />
        <div>
          <div className='font-normal'>
            <div className='font-bitter'>
              {title}
              <span className='hero-heading-period'>.</span>
            </div>

            <div className='article-heading__title'></div>
          </div>
          <div className=''>
            <p className='hover:animate-fadeFromLeft bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] bg-clip-text text-transparent opacity-75 transition-all duration-500 py-6 tracking-wide'>
              {content}
            </p>
          </div>

          {/* <span
            className='translate-x-[-50%] text-[1.2rem] text-black uppercase font-sans animate-reveal'
            aria-hidden='true'
          >
            <span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[0ms]'>
                S
              </span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[100ms]'>
                c
              </span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[200ms]'>
                r
              </span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[300ms]'>
                o
              </span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[400ms]'>
                l
              </span>
              <span className='inline-block text-[#919795] uppercase p-0 m-[0_1px] align-baseline font-inherit animate-scrollBob delay-[500ms]'>
                l
              </span>
            </span>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
