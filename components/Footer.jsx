import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Yeah<span className={styles.brand}> this is an example footer</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;