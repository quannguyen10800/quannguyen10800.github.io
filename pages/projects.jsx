// import styles from '../styles/ProjectsPage.module.css'; 

// const experiences = [
//   {
//     title: 'Front-end Developer',
//     company: 'Vanntechs Web Studio',
//     location: 'Montreal, QC, Canada',
//     description: 'Worked on developing scalable solutions for web applications.',
//     startDate: 'May 2020',
//     endDate: 'April 2023',
//   },
//   {
//     title: 'Business Analyst',
//     company: 'SHN-Promod',
//     location: 'Kaluga, Russia',
//     description: 'Gathered and documented business requirements to improve workflow',
//     startDate: 'January 2018',
//     endDate: 'June 2019',
//   },
//   {
//     title: 'Mobile Developer',
//     company: 'FPT Software',
//     location: 'Ho Chi Minh City, Vietnam',
//     description: 'Remotely building performant mobile apps on both the iOS and Android platforms',
//     startDate: 'July 2024',
//     endDate: 'Present',
//   },
// ];

// const ExperiencePage = () => {
//   return (
//     <>
//       <h3>Professional Experiences</h3>
//       <br/>
//       <hr/>

//       <div className={styles.container}>
//         {experiences.map((experience, index) => (
//           <div key={index} className={styles.card}>
//             <h4 className={styles.title}>{experience.title}</h4>
//             <p className={styles.company}>{experience.company}</p>
//             <p className={styles.location}>{experience.location}</p>
//             <p className={styles.dates}>
//               {experience.startDate} - {experience.endDate}
//             </p>
//             <p>{experience.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ExperiencePage;


import styles from '../styles/ProjectsPage.module.css'; 
import classNames from 'classnames'; // Import the classnames package

const experiences = [
  {
    title: 'Front-end Developer',
    company: 'Vanntechs Web Studio',
    location: 'Montreal, QC, Canada',
    description: 'Worked on developing scalable solutions for web applications.',
    startDate: 'May 2020',
    endDate: 'April 2023',
    skills: ['ReactJS', 'JQuery', 'CSS', 'JavaScript'],
  },
  {
    title: 'Business Analyst',
    company: 'SHN-Promod',
    location: 'Kaluga, Russia',
    description: 'Gathered and documented business requirements to improve workflow.',
    startDate: 'January 2018',
    endDate: 'June 2019',
    skills: ['SQL', 'Data Analysis', 'Excel', 'Business Communication'],
  },
  {
    title: 'Mobile Developer',
    company: 'FPT Software',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Remotely building performant mobile apps on both the iOS and Android platforms.',
    startDate: 'July 2024',
    endDate: 'Present',
    skills: ['React Native', 'NodeJS', 'Android', 'iOS'],
  },

];


const education = [
  {
    title: 'Bachelor of Computer Science',
    institution: 'Concordia University',
    location: 'Montreal, QC, Canada',
    startDate: 'September 2019',
    endDate: 'December 2024',
  },
  {
    title: 'Master of Data Analytics',
    institution: 'Queensland University of Technology',
    location: 'Brisbane, QLD, Australia',
    startDate: 'February 2025',
    endDate: 'present',
  },
];

const ExperiencePage = () => {
  return (
    <>

      <h3 >Education</h3>
      <br />
      <hr />

      <div className={styles.container}>
        {education.map((edu, index) => (
          <div key={index} className={styles.card}>
            <h4 className={styles.title}>{edu.title}</h4>
            <p className={styles.company}>{edu.institution}</p>
            <p className={styles.location}>{edu.location}</p>
            <p className={styles.dates}>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </div>

      <h3 className={styles.experience}>Work Experiences</h3>
      <br/>
      <hr/>
      
      <div className={styles.container}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.card}>
            <h4 className={styles.title}>{experience.title}</h4>
            <p className={styles.company}>{experience.company}</p>
            <p className={styles.location}>{experience.location}</p>
            <p className={styles.dates}>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.description}</p>
            <div className={styles.skillsContainer}>
              {experience.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className={classNames(styles.skillTag, styles[skill.replace(/\s/g, '')])}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperiencePage;