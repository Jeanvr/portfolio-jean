import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => (
  <div className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
    <div className="bg-cover bg-center h-48" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default ProjectCard;
