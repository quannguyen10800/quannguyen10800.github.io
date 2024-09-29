import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import ScholarIcon from './icons/ScholarIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import styles from '../styles/Bottombar.module.css';
import SpotifyIcon from './icons/SpotifyIcon';

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/quannguyen10800/quannguyen10800.github.io"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/sol7/" target="_blank" rel="noopener">
          <div className={styles.section}>
            <LinkedinIcon className={styles.icon} />
            <p>Linkedin</p>
          </div>
        </a>
        <a href="https://github.com/quannguyen10800" target="_blank" rel="noopener">
          <div className={styles.section}>
            <GithubIcon className={styles.icon} />
            <p>Github</p>
          </div>
        </a>
        <a href="https://open.spotify.com/user/31dzefklsv6yjhvmdp2quq64bsfm?si=40f66ba4364f4a71" target="_blank" rel="noopener">
          <div className={styles.section}>
            <SpotifyIcon className={styles.icon} />
            <p>Spotify</p>
          </div>
        </a>
        {/* <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Powered by Next.js</p>
        </div> */}
        {/* <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div> */}
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
