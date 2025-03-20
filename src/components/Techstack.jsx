const Techstack = () => {
  return (
    <div
      className='relative h-[250px] w-[250px] grid grid-cols-3 grid-rows-3 gap-2 p-2 opacity-70'
      style={{
        background: `
        repeating-linear-gradient(45deg, transparent, transparent 10px, var(--fill) 10px, var(--fill) 20px),
        linear-gradient(to bottom, #eee, #999)
      `,
      }}
    >
      {[
        {
          src: 'https://img.icons8.com/color/48/000000/react-native.png',
          alt: 'React',
        },
        {
          src: 'https://img.icons8.com/color/48/000000/typescript.png',
          alt: 'TypeScript',
        },
        {
          src: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
          alt: 'HTML',
        },
        { src: 'https://img.icons8.com/color/48/000000/css3.png', alt: 'CSS' },
        { text: 'Stacks' }, // 중앙 (5번째)
        {
          src: 'https://img.icons8.com/color/48/000000/nodejs.png',
          alt: 'Node.js',
        },
        { src: 'https://img.icons8.com/color/48/000000/sql.png', alt: 'SQL' },
        {
          src: 'https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000',
          alt: 'Next.js',
        },
        {
          src: 'https://img.icons8.com/color/48/000000/javascript.png',
          alt: 'JavaScript',
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center transition-all duration-300 hover:scale-110`}
        >
          {item.text ? (
            item.text
          ) : (
            <img
              src={item.src}
              alt={item.alt}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Techstack;
