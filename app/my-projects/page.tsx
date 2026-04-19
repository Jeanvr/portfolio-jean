import React from 'react';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Bnsd Clothes',
    description: 'Ecommerce website for clothing',
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
  // añadir aqui mas proyectos
];

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
