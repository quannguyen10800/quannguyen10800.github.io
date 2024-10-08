import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'bibonguyen14@gmail.com',
    href: 'mailto:bibonguyen14@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/quan',
    href: 'https://www.linkedin.com/in/sol7/',
  },
  {
    social: 'GitHub',
    link: 'github.com/quannguyen10800',
    href: 'https://github.com/quannguyen10800',
  },
  {
    social: 'Website',
    link: 'quannguyen10800.github.io',
    href: 'https://quannguyen10800.github.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>contacts</a>
        </p>
      <p className={styles.line}>
        <span>nguyen</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
