// import styles from '../styles/ResumePage.module.css';
// import { pdfjs, Document, Page } from '@react-pdf/renderer'
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
// const myResume = './Resume_QuanAU.pdf';

// const ResumePage = () => {
//   return (
//     <center>
//       <h3>Resume (<a href={myResume} className={styles.underline} download="Resume_QuanAU.pdf">Click to download</a>)</h3>
//       <br />
//       <div className={styles.pdfContainer}>
//         <Document file={myResume}>
//           <Page pageIndex={0} scale={1.5} renderMode="svg" />
//         </Document>
//       </div>
//     </center>
//   );
// };

import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const myResume = '/Resume_Quan_24.pdf'; 

const ResumePage = () => {
  return (
    <center>
      <h3>
        Resume (
        <a
          href={myResume}
          className={styles.underline}
          download="Resume_Quan.pdf"
        >
          Click to download
        </a>
        )
      </h3>
      <br />
      <div className={styles.pdfContainer}>
        <Document file={myResume}>
          <Page pageIndex={0} scale={1.5} renderMode="svg" />
        </Document>
      </div>
    </center>
  );
};



export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
