// import data from './misc-projects.json';

// export const getMiscProjects = () => {
//   return data;
// };

// export default (req, res) => {
//   const projects = getMiscProjects();
//   res.json(projects);
// };


import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

const handleMiscProjects = (req, res) => {
  const projects = getMiscProjects();
  res.json(projects);
};

export default handleMiscProjects;