// import { getPapers } from './api/papers';
import styles from '../styles/PapersPage.module.css';

const PapersPage = ({ papers }) => {
  return (
    <>
      <h3>My projects</h3>
      <br/>
      <hr/>
      
      <div className={styles.container}>
        {papers.map((paper) => (
          <div key={paper.id} className={styles.card}>
            <div className={styles.content}>
              <h3>{paper.title}</h3>
              <p><strong>Abstract:</strong> {paper.abstract}</p>
              {/* <p><strong>Conference:</strong> {paper.conference}</p> */}
              <p><strong>Year:</strong> {paper.year}</p>
              {/* <p><strong>Citations:</strong> {paper.citations}</p> */}
              <div className={styles.cta}>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  View 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Static list for static export (no API routes)
  const papers = [
    // Fill with your real items; sample structure below
    { id: 1, title: 'Server Client Database ', abstract: 'Developed a small database server with Python. Implemented a SocketServer class in its standard libraries for concurrency and thread control. Send requests to the server and ask for the specific task to be performed, such as: Find, add, delete a customer, update the customer’s age, address, phone number, etc.', year: 2021, link: 'https://github.com/quannguyen10800/Server_Client_Database' },
    { id: 2, title: 'Spotify-API-Oauth', abstract: 'Developed with Javascript, REST API and Node.js. Generated API that responds to a specific command with keyword triggers by sending corresponding images. Implemented image retrieval and delivery functionality, enabling the bot to quickly respond with an image upon user request.', year: 2024, link: 'https://github.com/quannguyen10800/Spotify-API-Oauth' },
  ];

  return {
    props: { title: 'Papers', papers },
  };
}

export default PapersPage;
