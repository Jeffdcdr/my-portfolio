import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Project One', description: 'A brief description of project one.' },
    { title: 'Project Two', description: 'A brief description of project two.' },
    { title: 'Project Three', description: 'A brief description of project three.' },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12  text-amber-200">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition text-amber-200"
            
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-white">
            {project.description}{" "}
            <a
              href="https://github.com/Jeffdcdr?tab=repositories"
              className="text-blue-600 hover:underline"
            >
              Check out my GitHub repositories
            </a>
          </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
