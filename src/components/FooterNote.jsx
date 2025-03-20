import styles from '../styles/FooterNote.module.css';

function FooterNote() {
  return (
    <small
      className='fixed bottom-[100px] left-[15px] text-left text-gray-400  origin-bottom-left font-sans mb-5 tracking-[0.02em] leading-none
opacity-0 animate-fadeIn'
    >
      <span className='inline-block mr-4 h-[1px] w-[25px] bg-gray-400'></span>©
      <span className={''}>2025. Made by Chris Kwanhee Han.</span>
    </small>
  );
}
export default FooterNote;
