import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Quan Nguyen's Profolio."
      />
      <meta
        name="keywords"
        content="data scientist portfolio, machine learning engineer, quan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Quan Nguyen's Portfolio" />
      <meta
        property="og:description"
        content="Quan Nguyen's Profolio."
      />
      <meta property="og:image" content="/quan_link.png" />
      <meta property="og:url" content="https://quannguyen10800.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Quan Nguyen',
};
