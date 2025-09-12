// import data from './bots-projects.json';

// export const getBotsProjects = () => {
//   return data;
// };

// export default (req, res) => {
//   const projects = getBotsProjects();
//   res.json(projects);
// };

import data from './bots-projects.json';

export const getBotsProjects = () => {
  return data;
};

// Assign the default export to a named function
const handleBotsProjects = (req, res) => {
  const projects = getBotsProjects();
  res.json(projects);
};

export default handleBotsProjects;
