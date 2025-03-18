import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={`${styles['header-container']} m-8 my-64`}>
      <div
        className={`${styles['header-title']} text-6xl text-info-content font-bitter`}
      >
        {/* <div className={`${styles.headerTitle} text-6xl`}> */}
        Hello,
        <div
          className={`${styles['header-subtitle']} mt-4 text-info-content font-bitter`}
        >
          I am Chris
        </div>
      </div>
      <div
        className={`${styles['header-description']} mt-16 w-1/2 text-lg/8 text-info-content font-bitter`}
      >
        Hello, World! I am an Accounting major and a full-stack developer who
        blends logic with creativity to build impactful solutions. Beyond
        coding, I enjoy pizza and staying fit.
      </div>

      <div className={`${styles['header-bar']}`}></div>

      <span
        className={`${styles['header-scroll']} text-sm`}
        aria-hidden='true'
      >
        <span>
          <span>S</span> <span>c</span> <span>r</span> <span>o</span>{' '}
          <span>l</span> <span>l</span>
        </span>
      </span>
    </div>
  );
}
export default Header;
