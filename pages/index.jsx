import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Data </h1>
          <h1>Analyst</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Quan Nguyen</h1>
            <h6 className={styles.bio}>Welcome to my portfolio:)</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='JQuery'>
                      JQuery
                    </span>
                    <span key='ReactJS' className='ReactJS'>
                      ReactJS
                    </span>
                    <span key='React Native' className='ReactNative'>
                      React Native
                    </span>
                    <span key='Node.js' className='NodeJS'>
                      Node.js
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Generative AI
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Matplotlib' className='Matplotlib'>
                      Matplotlib
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Restful APIS' className='RestfulAPIS'>
                      Restful APIS
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Engineering
                    </span>
                    <span key='Bots' className='Bots'>
                      Bots
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/quan.png"
                layout="resposive"
                width={300}
                height={300}
                alt="Quan' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
