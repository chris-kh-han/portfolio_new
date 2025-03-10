const Card = ({ title, content, image }) => {
  return (
    <div>
      <div className='col-span-1 p-6 text-primary xl:row-span-3'>
        {image && (
          <img
            src={image}
            alt={title}
            className='h-fit w-full object-contain sm:h-[350px] bg-gradient-to-r from-primary-content to-secondary-content'
          />
        )}
        <p className='my-4 text-2xl font-bold'>{title}</p>
        <p className='hover:animate-fadeFromLeft bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] bg-clip-text text-transparent opacity-75 transition-all duration-500'>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
