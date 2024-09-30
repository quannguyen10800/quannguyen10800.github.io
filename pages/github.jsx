// import Image from 'next/image';
// import GitHubCalendar from 'react-github-calendar';
// import RepoCard from '../components/RepoCard';
// import styles from '../styles/GithubPage.module.css';

// const GithubPage = ({ repos, user }) => {
//   const theme = {
//     dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//   };

//   return (
//     <>
//       <a href={`https://github.com/quannguyen10800`} target="_blank" rel="noopener" className={styles.no_color}>
//         <div className={styles.user}>
//           <div>
//             <Image
//               src={user.avatar_url}
//               className={styles.avatar}
//               alt={user.login}
//               width={50}
//               height={50}
//             />
//             <h3 className={styles.username}>{user.login}</h3>
//           </div>
//           <div>
//             <h3>{user.public_repos} repos</h3>
//           </div>
//           <div>
//             <h3>{user.followers} followers</h3>
//           </div>
//         </div>
//       </a>
//       <div><center><h3>My Most Popular Repositories on Github</h3></center></div>
//       <div className={styles.container}>
//         {repos.map((repo) => (
//           <RepoCard key={repo.id} repo={repo} />
//         ))}
//       </div>
//       <div><center><h3>My Github Calendar</h3></center></div>
//       <br />
//       <center>
//         <div className={styles.contributions}>
//           <GitHubCalendar
//             username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
//             theme={theme}
//             hideColorLegend
//           />
//         </div>
//       </center>
//     </>
//   );
// };

// export async function getStaticProps() {
//   console.log(process.env.NEXT_PUBLIC_GITHUB_USERNAME); // Check if username is being passed correctly
  
//   const userRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
//     {
//       headers: {
//         Authorization: `token ${process.env.GITHUB_API_KEY}`,
//       },
//     }
//   );
//   const user = await userRes.json();

//   const repoRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
//     {
//       headers: {
//         Authorization: `token ${process.env.GITHUB_API_KEY}`,
//       },
//     }
//   );

//   let repos = await repoRes.json();
//   if (!Array.isArray(repos)) {
//     repos = [];
//   }

//   repos = repos
//     .sort((a, b) => {
//       return (
//         b.stargazers_count +
//         b.watchers_count +
//         b.forks_count -
//         (a.stargazers_count + a.watchers_count + a.forks_count)
//       );
//     })
//     .slice(0, 10); // Limit to top 10 repos

//   return {
//     props: { title: 'GitHub', repos, user },
//     revalidate: 30,
//   };
// }

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <>
      <a href={`https://github.com/quannguyen10800`} target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div><center><h3>My Most Popular Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {
  console.log(process.env.NEXT_PUBLIC_GITHUB_USERNAME); // Check if username is being passed correctly
  console.log(process.env.GITHUB_API_KEY);
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );

  let repos = await repoRes.json();
  if (!Array.isArray(repos)) {
    repos = [];
  }

  repos = repos
    .sort((a, b) => {
      return (
        b.stargazers_count +
        b.watchers_count +
        b.forks_count -
        (a.stargazers_count + a.watchers_count + a.forks_count)
      );
    })
    .slice(0, 10); // Limit to top 10 repos

  return {
    props: { title: 'GitHub', repos, user },
  }; // No revalidate property
}

export default GithubPage;



