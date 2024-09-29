// import data from './published-papers.json';

// export const getPapers = () => {
//   return data;
// };

// export default (req, res) => {
//   const projects = getPapers();
//   res.json(projects);
// };


import data from './published-papers.json';

export const getPapers = () => {
  return data;
};

const handlePapers = (req, res) => {
  const projects = getPapers();
  res.json(projects);
}

export default handlePapers;
