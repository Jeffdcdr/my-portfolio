import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Next.js', 'CSS', 'Node.js', 'Salesforce Administration', 'Salesforce Development','Analytics', 
  'HTML', 'Git', 'Salesforce Configuration Specialist', 'SQL', 'Python', 'Java', 'Apex', 'Visualforce', 'LWC', 'Salesforce Automation (Flows, Process builder, Workflows, Approval Processes)'
  ];

  return (
    <section id="skills" className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12  text-slate-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
