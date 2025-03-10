const Footer = () => {
  return (
    <footer className='footer bg-primary-content text-neutral-content p-10 flex '>
      <aside>
        <p className='text-primary tracking-wider'>
          Built with passion by Chris Han.
          <br />
          "Every line of code is a step towards building a better future."
        </p>
      </aside>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a
            href='mailto:chris.kh.han@gmail.com'
            className='flex items-center'
          >
            <img
              src='https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000'
              alt='Email'
              className='mr-4 w-[40px] h-[40px] cursor-pointer'
            />
          </a>

          <a
            href='https://github.com/chris-kh-han'
            className='flex items-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF'
              alt='GitHub'
              className='mr-4 w-[40px] h-[40px]'
            />
          </a>

          <a
            href='https://www.linkedin.com/in/chris-kh-han/'
            className='flex items-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://img.icons8.com/color/48/000000/linkedin.png'
              alt='LinkedIn'
              className='mr-4 w-[40px] h-[40px]'
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
