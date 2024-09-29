// import data from './pypi-projects.json';

// export const getPyPiProjects = () => {
//   return data;
// };

// export default (req, res) => {
//   const projects = getPyPiProjects();
//   res.json(projects);
// };


import data from './pypi-projects.json';

export const getPyPiProjects = () => {
  return data;
};

const handlePyPiProjects = (req, res) => {
  const projects = getMiscProjects();
  res.json(projects);
};

export default handlePyPiProjects;