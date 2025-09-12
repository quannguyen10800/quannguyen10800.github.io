// pages/github.jsx
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
//   const theme = {
//     level0: '#161B22',
//     level1: '#0e4429',
//     level2: '#006d32',
//     level3: '#26a641',
//     level4: '#39d353',
//   };
    const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark:  ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

  return (
    <>
      <a
        href="https://github.com/quannguyen10800"
        target="_blank"
        rel="noreferrer"
        className={styles.no_color}
      >
        <div className={styles.user}>
          <div>
            {user?.avatar_url && (
              <Image
                src={user.avatar_url}
                className={styles.avatar}
                alt={user?.login ?? 'GitHub user'}
                width={50}
                height={50}
              />
            )}
            <h3 className={styles.username}>
              {user?.login ?? process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            </h3>
          </div>
          <div><h3>{user?.public_repos ?? '—'} repos</h3></div>
          <div><h3>{user?.followers ?? '—'} followers</h3></div>
        </div>
      </a>

      {/* Your repos and calendar go after */}
      <div>
  <center><h3>My Most Popular Repositories on GitHub</h3></center>
</div>

<div className={styles.container}>
  {repos.map((repo) => (
    <RepoCard key={repo.id} repo={repo} />
  ))}
</div>

<div style={{ marginTop: 24, textAlign: 'center' }}>
  <h3>My GitHub Calendar</h3>
  <div style={{ display: 'inline-block', marginTop: 8 }}>
    <GitHubCalendar
      username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
      hideColorLegend
    />
  </div>
</div>
    </>
  );
};

export async function getStaticProps() {
  const headers = process.env.GITHUB_API_KEY
    ? { Authorization: `token ${process.env.GITHUB_API_KEY}` }
    : {};

  let user = null;
  let repos = [];

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
        { headers }
      ),
      fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
        { headers }
      ),
    ]);

    if (userRes.ok) user = await userRes.json();
    if (repoRes.ok) {
      const all = await repoRes.json();
      if (Array.isArray(all)) {
        repos = all
          .sort(
            (a, b) =>
              b.stargazers_count +
              b.watchers_count +
              b.forks_count -
              (a.stargazers_count + a.watchers_count + a.forks_count)
          )
          .slice(0, 10);
      }
    }
  } catch (e) {
    // leave user/repo as fallback defaults
  }

  

  return {
    props: { title: 'GitHub', repos, user },
    
  };
}

export default GithubPage;