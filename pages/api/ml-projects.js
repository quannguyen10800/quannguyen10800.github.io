// import data from './ml-projects.json';

// export const getMLProjects = () => {
//   return data;
// };

// export default (req, res) => {
//   const projects = getMLProjects();
//   res.json(projects);
// };


import data from './ml-projects.json';

export const getMLProjects = () => {
  return data;
};

const handleMLProjects = (req, res) => {
  const projects = getMLProjects();
  res.json(projects);
}

export default handleMLProjects;