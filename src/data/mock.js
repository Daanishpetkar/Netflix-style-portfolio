// Example Netflix-style portfolio data and utility functions

const portfolioData = [
  {
    id: '1',
    category: 'Web Development',
    projects: [
      {
        title: 'Portfolio Website',
        link: 'https://example.com',
        description: 'A personal portfolio website built using modern web technologies.',
        technologies: ['React', 'CSS', 'Node.js']
      },
      {
        title: 'E-Commerce Platform',
        link: 'https://example-ecommerce.com',
        description: 'An e-commerce platform with shopping cart and payment integration.',
        technologies: ['Vue', 'Firebase', 'Tailwind CSS']
      }
    ]
  },
  {
    id: '2',
    category: 'Mobile Development',
    projects: [
      {
        title: 'Fitness Tracker App',
        link: 'https://example-fitness.com',
        description: 'A cross-platform fitness tracking app.',
        technologies: ['Flutter', 'GraphQL', 'AWS']
      }
    ]
  }
];

/**
 * Utility function to fetch portfolio data for a specific category.
 * @param {string} category - The category of projects to fetch.
 * @returns {Array} - An array of projects in the specified category.
 */
function getProjectsByCategory(category) {
  const data = portfolioData.find(item => item.category === category);
  return data ? data.projects : [];
}

/**
 * Utility function to fetch all technologies used in the portfolio.
 * @returns {Array} - An array of unique technologies.
 */
function getAllTechnologies() {
  const techSet = new Set();
  portfolioData.forEach(item => {
    item.projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
  });
  return Array.from(techSet);
}

export { portfolioData, getProjectsByCategory, getAllTechnologies };