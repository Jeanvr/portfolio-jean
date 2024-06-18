import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Bnsd Clothes',
    description: 'Ecommerce website for a clothing',
    image: '/project1.jpg',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: '/project2.jpg',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    image: '/project3.jpg',
  },
  // Añadir más proyectos según sea necesario
];

const ProjectCard: React.FC<Project> = ({ title, description, image }) => (
  <div className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
    <div className="bg-cover bg-center h-48" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[90%] max-h-[90%]'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
